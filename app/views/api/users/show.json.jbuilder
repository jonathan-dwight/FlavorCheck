json.partial! "api/users/user", user: @user


# json.followee_id
# json.followers do 
#     debugger
#     @user.followees.each do |followee|
#         json.set! followee.id do
#             json.extract! followee, :followee_id 
#         end
#     end
# end
