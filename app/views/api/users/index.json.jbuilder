json.users do 
    @users.each do |user|
        json.set! user.id do
            json.partial! "api/users/user", user: user
        end
    end
end

json.followers do 
    @users.each do |user|
        user.followers.each do |follow|
            json.set! follow.id do 
                json.extract! follow, :id, :followee_id, :follower_id
            end
        end
    end
end