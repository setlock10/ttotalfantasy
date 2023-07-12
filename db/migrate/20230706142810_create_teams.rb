class CreateTeams < ActiveRecord::Migration[7.0]
  def change
    create_table :teams do |t|
      t.integer :number
      t.string :name
      t.float :win_total_2023
      t.integer :over_juice_2023
      t.integer :under_juice_2023
      t.integer :pot_4_2023
      t.integer :elo_2022
      t.boolean :playoffs_2022
      t.string :logo
      t.string :logo_large

      t.timestamps
    end
  end
end
