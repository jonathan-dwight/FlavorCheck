class Api::SessionsController < ApplicationController

     def create
        @user = User.find_by_credentials(
            params[:user][:username],
            params[:user][:password]
        )

        if @user
            login!(@user)
            render 'api/users/show'
        else
            render json:["Invalid credentials"], status: 422
            # we dont need to redirect anymore because we are just sending back json
            # for the front end
        end
    end

    def destroy
        if current_user 
            logout!
            render json: {}
        else  
            render json: ["Current User not logged in"], status: 404
            # leave in bracket because we would potentially iterate over errors
        end
    end
end


