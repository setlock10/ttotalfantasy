
class PicksController < ApplicationController
    def create
        # byebug
        pick= Pick.find_by(user_id: pick_params[:user_id], team_id: pick_params[:team_id])
        if(pick)
            pick=Pick.update(pick_params)
        else
            Pick.create(pick_params)
        end

        render json: pick, status: :created
    end

    def index
        picks=Pick.where(user_id: session[:user_id])
        if picks
            render json: picks.sort_by{|k| k[:team_id]}, status: :ok
        else
            render json: {error: "Picks Do Not Exist"}, status: :no_content
        end
    end


    private
    def pick_params
        params.permit( :user_id, :team_id, :is_picked)
    end

end
