class Api::FollowersController < ApplicationController

    def create
        @follow = Follower.new(follow_params)
        if @follow.save 
            render :show
            # might need to render out an object with info
        end
    end

    def destroy
        @follow = Follower.find_by(id: params[:id])
        if @follow
            @follow.destroy
            render json: ["Destroy Success"]
        end
        
    end

    private

    def follow_params
        params.require(:follower).permit(:followee_id, :follower_id)
    end
end
