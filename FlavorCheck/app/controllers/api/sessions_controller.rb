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
            render json:["Invalid Flavor Profile!"], status: 422
        end
    end

    def destroy
        if current_user 
            logout!
            render json: {}
        else  
            render json: ["Current User not logged in"], status: 40
        end
    end
end


