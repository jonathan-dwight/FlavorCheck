class Api::BurgersController < ApplicationController

    def show 
        @burger = Burger.find_by(id: params[:id])
        render :show
    end


    def index
        @burgers = Burger.all.includes(:author).includes(:restaurant) 
        #test this - in postMan
        render :index
    end
    

    def create
        @burger = Burger.new(burger_params)
        
        if @burger.save 
            render :show
        else  
            render json: @burger.errors.full_messages, status: 422
        end
    end

    #WORRY ABOUT THIS LATER 
    def update
        @burger  = current_user.posts.find_by(id: params[:id])
        # @burger = Burger.find_by(id: params[:id]) -- tested
        if @burger.update(burger_params) && @burger
            render :show
        else 
            render json: ["We could not update your flavor :("]
        end
    end

    #have to find a way to only have a burger destroyed by current user
    def destroy
        @burger = Burger.find_by(id: params[:id])
        if @burger # && burger.author_id == current_user.id
            @burger.destroy
            render json: ["We will miss your flavor :("]
        else  
            render json: ["Burger does not exist"], status: 422
        end
    end



    private

    def burger_params 
        params.require(:burger).permit(:name, :rating, :description, :restaurant_id, :author_id)
    end


end
