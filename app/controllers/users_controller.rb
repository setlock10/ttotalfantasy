class UsersController < ApplicationController

    def create
        # byebug
        user=User.create!(user_params)
        session[:user_id]=user.id
        render json: user, status: :created
    end

    def index
        render json: User.order(:score_total), status: :ok
    end

    def show
        
        current_user = User.find_by(id: session[:user_id])
        if current_user
            render json: current_user, status: :ok
        else
            render json: { error: "Not authorized" }, status: :unauthorized
        end

    end

    private
    def user_params
        params.permit( :username, :password, :first_name, :last_name)
    end


end
