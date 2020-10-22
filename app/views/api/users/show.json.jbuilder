json.partial! "api/users/user", user: @user

json.followers do 
    @user.followers.each do |follow|
        json.set! follow.id do
            json.extract! follow, :id, :followee_id, :follower_id
        end
    end
end

json.burgers do 
    @user.posts.each do |burger|
        json.set! burger.id do 
            json.extract! burger, :id, :name, :rating, :description, :restaurant_id, :author_id, :created_at
        end
    end
end