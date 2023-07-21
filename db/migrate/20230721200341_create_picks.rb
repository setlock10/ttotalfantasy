class CreatePicks < ActiveRecord::Migration[7.0]
  def change
    create_table :picks do |t|
      t.integer :team_id
      t.integer :user_id
      t.boolean :is_picked

      t.timestamps
    end
  end
end
