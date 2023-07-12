class TeamSerializer < ActiveModel::Serializer
  attributes :id, :name, :code, :pot_4_2023, :pot_8_2023, :win_total_2023, :over_juice_2023, :under_juice_2023, :elo_2022, :playoffs_2022, :logo, :logo_large

  def pot_8_2023
    object.pot8.pot_8_2023
    #byebug
  end

  def code
    object.code.code
  end
end
