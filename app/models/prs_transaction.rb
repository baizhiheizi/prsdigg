# frozen_string_literal: true

# == Schema Information
#
# Table name: prs_transactions
#
#  id               :bigint           not null, primary key
#  block_num        :integer
#  block_type       :string
#  hash_str         :string
#  processed_at     :datetime
#  raw              :jsonb
#  signature        :string
#  type(STI)        :string
#  user_address     :string
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#  transaction_id   :string
#  tx_id            :string
#
# Indexes
#
#  index_prs_transactions_on_block_num       (block_num) UNIQUE
#  index_prs_transactions_on_transaction_id  (transaction_id) UNIQUE
#  index_prs_transactions_on_tx_id           (tx_id) UNIQUE
#
class PrsTransaction < ApplicationRecord
  POLLING_INTERVAL = 0.1
  POLLING_START_TIME = Time.new(2021, 1, 1).rfc3339

  belongs_to :prs_account, primary_key: :account, foreign_key: :user_address,\
                           inverse_of: :transactions, optional: true

  store_accessor :raw, :updated_at, prefix: true
  store_accessor :raw, :meta
  store_accessor :raw, :data

  before_validation :set_defaults, on: :create

  validates :raw, presence: true
  validates :tx_id, uniqueness: true
  validates :block_num, uniqueness: true
  validates :transaction_id, uniqueness: true

  after_commit :process!, on: :create

  def self.poll_authorizations
    loop do
      polled_at = PrsTransaction.order(created_at: :desc).first&.raw_updated_at || POLLING_START_TIME
      r = Prs.api.pip2001_authorization(count: 50, updated_at: polled_at)

      authorizations = r&.[]('data')&.[]('authorization')
      break if authorizations.blank?

      authorizations.each do |authorization|
        tx = PrsTransaction.create_with(raw: authorization).find_or_create_by(tx_id: authorization['id'])
        tx.update raw: authorization if tx.block_num.blank?
      end

      break if authorizations.length < 50

      sleep POLLING_INTERVAL
    end
  end

  def self.poll_posts
    loop do
      polled_at = PrsTransaction.order(created_at: :desc).first&.raw_updated_at || POLLING_START_TIME
      r = Prs.api.pip2001_posts(count: 50, updated_at: polled_at)

      posts = r&.[]('data')&.[]('posts')
      break if posts.blank?

      posts.each do |post|
        tx = PrsTransaction.create_with(raw: post).find_or_create_by(tx_id: post['id'])
        tx.update raw: post if tx.block_num.blank?
      end

      break if posts.length < 50

      sleep POLLING_INTERVAL
    end
  end

  def block_url
    return if block_num.blank?

    format('https://press.one/blockchain/blocks/%<block_num>s', block_num: block_num)
  end

  def process!
    return if processed?

    case type
    when 'PrsAccountAllowTransaction'
      account = PrsAccount.find_by(account: user_address)
      return if account.blank?

      account.allow! if account.may_allow?
      touch_processed_at
    when 'PrsAccountDenyTransaction'
      account = PrsAccount.find_by(account: user_address)
      return if account.blank?

      account.deny! if account.may_deny?
      touch_processed_at
    when 'ArticleSnapshotPrsTransaction'
      touch_processed_at
    end
  end

  def processed?
    processed_at?
  end

  def touch_processed_at
    update processed_at: Time.current
  end

  private

  def set_defaults
    return unless new_record?

    assign_attributes(
      tx_id: raw['id'],
      block_type: raw['type'],
      hash_str: raw['hash'],
      signature: raw['signature'],
      user_address: raw['user_address'],
      transaction_id: raw['transaction_id']
    )

    self.block_num = raw['block_num'] if raw['block_num'].present?

    return unless data.is_a?(Hash)

    self.type = 'PrsAccountAllowTransaction' if data.key?('allow')
    self.type = 'PrsAccountDenyTransaction' if data.key?('deny')
    self.type = 'ArticleSnapshotPrsTransaction' if data.key?('file_hash') || data.key?('updated_tx_id')
  end
end
