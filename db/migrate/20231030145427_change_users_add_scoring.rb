class ChangeUsersAddScoring < ActiveRecord::Migration[7.0]
  def change
    add_column    :users, :score_reg, :integer
    add_column    :users, :score_pla, :integer
    add_column    :users, :score_sup, :integer
    add_column    :users, :score_total, :integer

  end
end
