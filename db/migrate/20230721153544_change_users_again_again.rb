class ChangeUsersAgainAgain < ActiveRecord::Migration[7.0]
  def change
    remove_column :users, :confirm
    remove_column :users, :createdAt
    add_column    :users, :first_name, :string
    add_column    :users, :last_name, :string
 
  end
end
