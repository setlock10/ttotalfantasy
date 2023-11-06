class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :score_total, :username, :picks
end
