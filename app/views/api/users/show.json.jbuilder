json.partial! "api/users/user", user: @user



json.followers do 
    @user.followers.each do |follow|
        json.set! follow.id do
            json.extract! follow, :followee_id, :follower_id
        end
    end
end
