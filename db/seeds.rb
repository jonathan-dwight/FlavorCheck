# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Restaurant.destroy_all
Burger.destroy_all
Follower.destroy_all

ActiveRecord::Base.connection.reset_pk_sequence!('users')
ActiveRecord::Base.connection.reset_pk_sequence!('restaurants')
ActiveRecord::Base.connection.reset_pk_sequence!('burgers')
#  RESETS THE PRIMARY KEY ID

user1 = User.create(username: "demo_user", name: "Demo User", password: "password", email: "test@aa.io")
user2 = User.create(username: "jonathan_dwight", name: "JD Buendia", password: "password", email: "jd@aa.io")
user3 = User.create(username: "treetop", name: "Tri Ta", password: "password", email: "tri@aa.io")
user4 = User.create(username: "jackpack", name: "Jacky Li", password: "password", email: "jacky@aa.io")
user5 = User.create(username: "petey", name: "Peter Min", password: "password", email: "peter@aa.io")
user6 = User.create(username: "cheetahluva", name: "Chris Lee", password: "password", email: "chris@aa.io")
user7 = User.create(username: "raveboi", name: "Jon Siu", password: "password", email: "jon@aa.io")

follow1 = Follower.create(followee_id: 3, follower_id: 2)
follow2 = Follower.create(followee_id: 4, follower_id: 2)
follow3 = Follower.create(followee_id: 5, follower_id: 4)
follow4 = Follower.create(followee_id: 7, follower_id: 4)

restaurant1 = Restaurant.create(name: "McDonald's")
restaurant2 = Restaurant.create(name: "In-N-Out")
restaurant3 = Restaurant.create(name: "Shake Shack")
restaurant4 = Restaurant.create(name: "Islands")
restaurant5 = Restaurant.create(name: "Orignal Tommy's")
restaurant6 = Restaurant.create(name: "Habit")
restaurant7 = Restaurant.create(name: "Umami Burger")
restaurant8 = Restaurant.create(name: "The Counter")
restaurant9 = Restaurant.create(name: "The Apple Pan")
restaurant10 = Restaurant.create(name: "Cassell's")
restaurant11 = Restaurant.create(name: "Plan Check")

burger1 = Burger.create(name: "McDouble", rating: 3, description: "It was really good with Mac sauce!!", restaurant_id: restaurant1.id, author_id: user2.id)
file1 = open("https://flavorcheck-seed.s3-us-west-1.amazonaws.com/mcdouble.jpg")
burger1.photo.attach(io: file1, filename: "img_#{burger1.id}.jpg")

burger2 = Burger.create(name: "Double Double", rating: 4, description: "First time having it! It was AMAZING!!", restaurant_id: restaurant2.id, author_id: user3.id)
file2 = open('https://flavorcheck-seed.s3-us-west-1.amazonaws.com/double-double.jpg')
burger2.photo.attach(io: file2, filename: "img_#{burger2.id}.jpg")

burger3 = Burger.create(name: "ShackBurger", rating: 2, description: "It was okay.... Not worth the price...", restaurant_id: restaurant3.id, author_id: user4.id)
file3 = open('https://flavorcheck-seed.s3-us-west-1.amazonaws.com/shakeburger.jpg')
burger3.photo.attach(io: file3, filename: "img_#{burger3.id}.jpg")

burger4 = Burger.create(name: "Hula Burger", rating: 4, description: "This is hands down best burger at Island's", restaurant_id: restaurant4.id, author_id: user5.id)
file4 = open('https://flavorcheck-seed.s3-us-west-1.amazonaws.com/hula-burger.jpg')
burger4.photo.attach(io: file4, filename: "img_#{burger4.id}.jpg")


burger5 = Burger.create(name: "Chili Cheese Burger", rating: 5, description: "Tommy's burgers are the secret in LA", restaurant_id: restaurant5.id, author_id: user6.id)
file5 = open('https://flavorcheck-seed.s3-us-west-1.amazonaws.com/tommy-chili-cheese.jpg')
burger5.photo.attach(io: file5, filename: "img_#{burger5.id}.jpg")


burger6 = Burger.create(name: "Double Charburger", rating: 3, description: "Always my go to burger", restaurant_id: restaurant6.id, author_id: user7.id)
file6 = open('https://flavorcheck-seed.s3-us-west-1.amazonaws.com/double-char-burger.jpg')
burger6.photo.attach(io: file6, filename: "img_#{burger6.id}.jpg")


burger7 = Burger.create(name: "Boomami Burger", rating: 4, description: "Just in time for halloween!", restaurant_id: restaurant7.id, author_id: user3.id)
file7 = open('https://flavorcheck-seed.s3-us-west-1.amazonaws.com/boomami-burger.jpg')
burger7.photo.attach(io: file7, filename: "img_#{burger7.id}.jpg")


burger8 = Burger.create(name: "Counter Burger", rating: 3, description: "Mountains of onion rings...", restaurant_id: restaurant8.id, author_id: user5.id)
file8 = open('https://flavorcheck-seed.s3-us-west-1.amazonaws.com/the-counter-burger.jpg')
burger8.photo.attach(io: file8, filename: "img_#{burger8.id}.jpg")

burger9 = Burger.create(name: "Steak Burger", rating: 4, description: "The classic cheese burger 👌", restaurant_id: restaurant9.id, author_id: user6.id)
file9 = open('https://flavorcheck-seed.s3-us-west-1.amazonaws.com/steak-burger.jpg')
burger9.photo.attach(io: file9, filename: "img_#{burger9.id}.jpg")


burger10 = Burger.create(name: "Cassell's", rating: 4, description: "THE BEST IN KTOWN!!!", restaurant_id: restaurant10.id, author_id: user2.id)
file10 = open("https://flavorcheck-seed.s3-us-west-1.amazonaws.com/Cassell's-hamburger.jpg")
burger10.photo.attach(io: file10, filename: "img_#{burger10.id}.jpg")

burger11 = Burger.create(name: "Truffle Mushroom Swiss", rating: 5, description: "I love TRUFFLE", restaurant_id: restaurant11.id, author_id: user4.id)
file11 = open("https://flavorcheck-seed.s3-us-west-1.amazonaws.com/truffle-burger.jpg")
burger11.photo.attach(io: file11, filename: "img_#{burger11.id}.jpg")






