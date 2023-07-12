class CreateCodes < ActiveRecord::Migration[7.0]
  def change
    create_table :codes do |t|
      t.integer :team_id
      t.string :code

      t.timestamps
    end
  end
end
