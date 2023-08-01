
class PicksController < ApplicationController
    def create
        # byebug
        #pick= Pick.find_by(user_id:  session[:user_id], team_id: pick_params[:team_id])
        pick= Pick.create(user_id:  session[:user_id],team_id: Team.find_by(number: pick_params[:team_id]).id,is_picked: pick_params[:is_picked])
        #if pick
        #     pick=Pick.update(pick_params)
        # else
        #     Pick.create(pick_params)
       #  end

        render json: pick, status: :created
    end

    def update
        
        pick =Pick.find_by(id: pick_params[:id])
        #byebug
        pick.update(is_picked: pick_params[:is_picked])
        render json: pick, status: :ok

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
        params.permit(  :id, :user_id, :team_id, :is_picked)
    end

end
