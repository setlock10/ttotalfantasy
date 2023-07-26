
class PicksController < ApplicationController
    def create
        # byebug
    end


    private
    def pick_params
        params.permit( :user_id, :team_id, :is_picked)
    end

end
