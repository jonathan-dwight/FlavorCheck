json.extract! user, :id, :username, :name, :email


json.followers do 
    user.followers.each do |follow|
        json.set! follow.id do
            json.extract! follow, :id, :followee_id, :follower_id
        end
    end
end