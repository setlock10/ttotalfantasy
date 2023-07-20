class ChangeUsersAgain < ActiveRecord::Migration[7.0]
  def change
    remove_column :users, :hash
    remove_column :users, :salt
    remove_column :users, :passport_id

  end
end
