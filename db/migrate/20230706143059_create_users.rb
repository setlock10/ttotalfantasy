class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :passport_id
      t.integer :createdAt
      t.string :username
      t.string :hash
      t.string :salt

      t.timestamps
    end
  end
end
