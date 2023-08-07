class SessionsController < ApplicationController
    def create
        
        user =User.find_by(username: params[:username])
         
        if user&.authenticate(params[:password]) 
            session[:user_id] = user.id
            render json: user, status: :ok
        else
            render json: {error:["Invalid password or username"]}, status: :unauthorized
        end
    end


    def destroy
        #byebug
       #sess = session.find_by(user_id: session[:user_id])
        #session.delete :user_id
        session.destroy
        #byebug
        head :no_content
    end

end
