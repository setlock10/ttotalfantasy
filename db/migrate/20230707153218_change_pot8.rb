class ChangePot8 < ActiveRecord::Migration[7.0]
  def change
    remove_column :pot8s, :number
    add_column :pot8s, :team_id, :integer
  end


end
