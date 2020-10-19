json.restaurant do
    json.partial! "api/restaurants/restaurant", restaurant: @restaurant
end

json.burgers do 
    @restaurant.burgers.each do |burger| 
        json.extract! burger, :id, :name, :rating, :description, :restaurant_id, :author_id, :created_at
        if burger.photo.attached?
            json.photo url_for(burger.photo)
        end
    end
end