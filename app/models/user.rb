class User < ApplicationRecord
    has_many :picks , ->{order(team_id: :asc)}
    has_secure_password
    
    validates :username, presence: true, uniqueness: true
end
