# frozen_string_literal: true

# == Schema Information
#
# Table name: mixin_messages
#
#  id                      :bigint           not null, primary key
#  action                  :string
#  category                :string
#  content(decrepted data) :string
#  processed_at            :datetime
#  raw                     :json
#  state                   :string
#  created_at              :datetime         not null
#  updated_at              :datetime         not null
#  conversation_id         :uuid
#  message_id              :uuid
#  user_id                 :uuid
#
# Indexes
#
#  index_mixin_messages_on_message_id  (message_id) UNIQUE
#
class MixinMessage < ApplicationRecord
  belongs_to :user, primary_key: :mixin_uuid, optional: true

  before_validation :setup_attributes

  validates :message_id, presence: true, uniqueness: true
  validates :raw, presence: true

  after_create :process_async

  scope :unprocessed, -> { where(processed_at: nil) }

  def processed?
    processed_at?
  end

  def process!
    if category == 'SYSTEM_ACCOUNT_SNAPSHOT'
      process_snapshot
    else
      send_default_reply
    end

    update processed_at: Time.current
  end

  def process_snapshot
    snapshot =
      begin
        JSON.parse(content)
      rescue JSON::ParserError
        nil
      end
    return if snapshot.blank?
    return if snapshot['amount'].to_f.negative?

    Payment
      .create_with(raw: snapshot)
      .find_or_create_by!(trace_id: snapshot['trace_id'])
  end

  def process_async
    ProcessMixinMessageWorker.perform_async message_id
  end

  def send_default_reply
    return if conversation_id.blank?

    MixinBot.api.send_text_message(
      conversation_id: conversation_id,
      data: 'May the force be with you.'
    )
  end

  private

  def setup_attributes
    return unless new_record?

    data = raw['data']

    self.action            = raw['action']
    self.message_id        = data['message_id']
    self.category          = data['category']
    self.conversation_id   = data['conversation_id']
    self.user_id           = data['user_id']
    self.content           = Base64.decode64 data['data'].to_s
  end
end