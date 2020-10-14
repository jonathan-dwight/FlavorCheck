class Api::BurgersController < ApplicationController

    def show 
        @burger = Burger.find_by(id: params[:id])
        render :show
    end

    def create
        @burger = Burger.new(burger_params)
        
        if @burger.save 
            render :show
        else  
            render json: @burger.errors.full_messages, status: 422
        end
    end


    def update
        @burger  = current_user.posts.find_by(id: params[:id])
        # @burger = Burger.find_by(id: params[:id]) -- tested
        if @burger.update(burger_params) && @burger
            render :show
        else 
            render json: ["We could not update your flavor :("]
        end
    end


    def destroy
        @burger = Burger.find_by(id: params[:id])
        
        if @burger && (@burger.author_id == current_user.id)
            @burger.destroy
            render json: ["We will miss your flavor :("]
        else  
            render :show
        end
    end


    def index
        @burgers = Burger.all 
        render :index
    end


    private

    def burger_params 
        params.require(:burger).permit(:name, :rating, :description, :picture, :restaurant_id, :author_id)
    end


end
