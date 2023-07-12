class TeamsController < ApplicationController
    def index
        render json: Team.order(:number), status: :ok
    end

end
