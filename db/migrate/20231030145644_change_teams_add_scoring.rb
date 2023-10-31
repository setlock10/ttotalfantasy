class ChangeTeamsAddScoring < ActiveRecord::Migration[7.0]
  def change
    add_column    :teams, :wins_reg, :integer
    add_column    :teams, :wins_pla, :integer
    add_column    :teams, :wins_sup, :integer

  end
end
