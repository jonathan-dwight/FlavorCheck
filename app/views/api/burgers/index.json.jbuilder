
json.burgers do 
    @burgers.each do |burger|
        json.set! burger.id do
            json.partial! "api/burgers/burgers", burger: burger
        end
    end
end

json.users do
    @burgers.each do |burger|
        json.set! burger.author.id do
            json.extract! burger.author, :id, :name , :username
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