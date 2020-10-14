@burgers.each do |burger|
    json.set! burger.id do
        json.partial! "api/burgers/burgers", burger: burger
    end
end
