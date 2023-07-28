class User < ApplicationRecord
    has_many :picks
    has_secure_password
    
    validates :username, presence: true, uniqueness: true
end
