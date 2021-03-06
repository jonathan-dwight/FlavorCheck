
json.burgers do 
    @burgers.each do |burger|
        json.set! burger.id do
            json.partial! "api/burgers/burgers", burger: burger
            if burger.photo.attached?
                json.photo url_for(burger.photo)
            end
        end
    end
end

json.users do
    @burgers.each do |burger|
        json.set! burger.author.id do
            json.extract! burger.author, :id, :name , :username
            if burger.author.photo.attached?
                json.photo url_for(burger.author.photo)
            end
        end
    end
end


json.restaurants do
    @burgers.each do |burger| 
        json.set! burger.restaurant.id do
            json.extract! burger.restaurant, :id, :name 
        end
    end
end
