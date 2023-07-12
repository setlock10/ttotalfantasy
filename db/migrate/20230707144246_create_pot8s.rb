class CreatePot8s < ActiveRecord::Migration[7.0]
  def change
    create_table :pot8s do |t|
      t.integer :number
      t.integer :pot_8_2023

      t.timestamps
    end
  end
end
