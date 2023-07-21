class PickSerializer < ActiveModel::Serializer
  attributes :id, :team_id, :user_id, :is_picked
end
