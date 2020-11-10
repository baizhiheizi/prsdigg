# frozen_string_literal: true

# == Schema Information
#
# Table name: users
#
#  id         :bigint           not null, primary key
#  avatar_url :string
#  mixin_uuid :uuid
#  name       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  mixin_id   :string
#
# Indexes
#
#  index_users_on_mixin_id    (mixin_id) UNIQUE
#  index_users_on_mixin_uuid  (mixin_uuid) UNIQUE
#
class User < ApplicationRecord
  include Authenticatable

  has_one :mixin_authorization, -> { where(provider: :mixin) }, class_name: 'UserAuthorization', inverse_of: :user
  has_many :articles, foreign_key: :author_id, inverse_of: :author, dependent: :nullify
  has_many :payments, foreign_key: :opponent_id, primary_key: :mixin_uuid, inverse_of: :payer, dependent: :nullify
  has_many :transfers, foreign_key: :opponent_id, primary_key: :mixin_uuid, inverse_of: :recipient, dependent: :nullify
  has_many :author_revenue_transfers, -> { where(transfer_type: :author_revenue) }, class_name: 'Transfer', foreign_key: :opponent_id, primary_key: :mixin_uuid, inverse_of: :recipient, dependent: :nullify
  has_many :reader_revenue_transfers, -> { where(transfer_type: :reader_revenue) }, class_name: 'Transfer', foreign_key: :opponent_id, primary_key: :mixin_uuid, inverse_of: :recipient, dependent: :nullify
  has_many :orders, foreign_key: :buyer_id, inverse_of: :buyer, dependent: :nullify
  has_many :bought_articles, -> { distinct.order(created_at: :desc) }, through: :orders, source: :item, source_type: 'Article'
  has_many :comments, foreign_key: :author_id, inverse_of: :author, dependent: :nullify

  validates :name, presence: true

  default_scope { includes(:mixin_authorization) }

  before_validation :setup_attributes

  def bio
    mixin_authorization&.raw&.[]('biography')
  end

  private

  def setup_attributes
    return if mixin_authorization.blank?

    assign_attributes(
      avatar_url: mixin_authorization.raw['avatar_url'],
      name: mixin_authorization.raw['full_name'],
      mixin_id: mixin_authorization.raw['identity_number'],
      mixin_uuid: mixin_authorization.raw['user_id']
    )
  end
end
