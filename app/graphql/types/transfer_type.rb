# frozen_string_literal: true

module Types
  class TransferType < Types::BaseObject
    field :trace_id, ID, null: false
    field :snapshot_id, String, null: false
    field :amount, Float, null: false
    field :memo, String, null: true
    field :transfer_type, String, null: false
    field :asset_id, String, null: false
    field :processed_at, GraphQL::Types::ISO8601DateTime, null: false

    field :receiver, Types::UserType, null: false
  end
end