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
ActiveRecord::Base.connection.reset_pk_sequence!('followers')


user1 = User.create(username: "demo_user", name: "Demo User", password: "password", email: "test@aa.io")

user2 = User.create(username: "jonathan_dwight", name: "JD Buendia", password: "password", email: "jd@aa.io")
user2_photo = open("https://flavorcheck-seed.s3-us-west-1.amazonaws.com/jd-profile.jpg")
user2.photo.attach(io: user2_photo, filename: "img_#{user2.id}.jpg")

user3 = User.create(username: "treetop", name: "Tri Ta", password: "password", email: "tri@aa.io")
user3_photo = open("https://flavorcheck-seed.s3-us-west-1.amazonaws.com/tri-profile.png")
user3.photo.attach(io: user3_photo, filename: "img_#{user3.id}.jpg")

user4 = User.create(username: "jackpack", name: "Jacky Li", password: "password", email: "jacky@aa.io")
user4_photo = open("https://flavorcheck-seed.s3-us-west-1.amazonaws.com/jacky-profile.png")
user4.photo.attach(io: user4_photo, filename: "img_#{user4.id}.jpg")

user5 = User.create(username: "petey", name: "Peter Min", password: "password", email: "peter@aa.io")
user5_photo = open("https://flavorcheck-seed.s3-us-west-1.amazonaws.com/peter-profile.jpg")
user5.photo.attach(io: user5_photo, filename: "img_#{user5.id}.jpg")

user6 = User.create(username: "cheetahluva", name: "Chris Lee", password: "password", email: "chris@aa.io")
user6_photo = open("https://flavorcheck-seed.s3-us-west-1.amazonaws.com/chris-profile.JPG")
user6.photo.attach(io: user6_photo, filename: "img_#{user6.id}.jpg")

user7 = User.create(username: "raveboi", name: "Jon Siu", password: "password", email: "jon@aa.io")
user7_photo = open("https://flavorcheck-seed.s3-us-west-1.amazonaws.com/jon-profile.png")
user7.photo.attach(io: user7_photo, filename: "img_#{user7.id}.jpg")

user8 = User.create(username: "damapa", name: "Ryan Mapa", password: "password", email: "ryan@aa.io")
user8_photo = open("https://flavorcheck-seed.s3-us-west-1.amazonaws.com/ryan-profile-pic.gif")
user8.photo.attach(io: user8_photo, filename: "img_#{user8.id}.jpg")

user9 = User.create(username: "lamchops", name: "Lisa Lam", password: "password", email: "lisa@aa.io")
user9_photo = open("https://flavorcheck-seed.s3-us-west-1.amazonaws.com/lisa-profile.jpeg")
user9.photo.attach(io: user9_photo, filename: "img_#{user9.id}.jpg")




follow1 = Follower.create(followee_id: 3, follower_id: 2)
follow2 = Follower.create(followee_id: 4, follower_id: 2)
follow3 = Follower.create(followee_id: 5, follower_id: 4)
follow4 = Follower.create(followee_id: 7, follower_id: 4)



restaurant1 = Restaurant.create(name: "McDonald's")
restaurant2 = Restaurant.create(name: "In-N-Out")
restaurant3 = Restaurant.create(name: "Shake Shack")
restaurant4 = Restaurant.create(name: "Islands")
restaurant5 = Restaurant.create(name: "Original Tommy's")
restaurant6 = Restaurant.create(name: "Habit")
restaurant7 = Restaurant.create(name: "Umami Burger")
restaurant8 = Restaurant.create(name: "The Counter")
restaurant9 = Restaurant.create(name: "The Apple Pan")
restaurant10 = Restaurant.create(name: "Cassell's")
restaurant11 = Restaurant.create(name: "Plan Check")
restaurant12 = Restaurant.create(name: "Five Guys")
restaurant13 = Restaurant.create(name: "White Castle")
restaurant14 = Restaurant.create(name: "Goldburger")
restaurant15 = Restaurant.create(name: "Burgers Never Say Die")
restaurant16 = Restaurant.create(name: "Gordan Ramsay Burger")
restaurant17 = Restaurant.create(name: "Burgers 99")
restaurant18 = Restaurant.create(name: "Holiday Burger")
restaurant19 = Restaurant.create(name: "Father's Office")
restaurant20 = Restaurant.create(name: "Amboy Quality Meats")
restaurant21 = Restaurant.create(name: "Tripp Burgers")
restaurant22 = Restaurant.create(name: "The Oinkster")
restaurant23 = Restaurant.create(name: "Pie 'n Burger")
restaurant24 = Restaurant.create(name: "The Standing Room")
restaurant25 = Restaurant.create(name: "Burgers and Brew")



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


burger11 = Burger.create(name: "Double Chili Cheese Burger", rating: 5, description: "Name a better chili cheese burger!", restaurant_id: restaurant5.id, author_id: user5.id)


burger12 = Burger.create(name: "Truffle Mushroom Swiss", rating: 5, description: "I love TRUFFLE", restaurant_id: restaurant11.id, author_id: user4.id)
file12 = open("https://flavorcheck-seed.s3-us-west-1.amazonaws.com/truffle-burger.jpg")
burger12.photo.attach(io: file12, filename: "img_#{burger12.id}.jpg")


burger13 = Burger.create(name: "Bacon Burger", rating: 3, description: "I love how they give you free peanuts", restaurant_id: restaurant12.id, author_id: user7.id)
file13 = open("https://flavorcheck-seed.s3-us-west-1.amazonaws.com/five-guys-burger.jpg")
burger13.photo.attach(io: file13, filename: "img_#{burger13.id}.jpg")


burger14 = Burger.create(name: "Umami Truffle", rating: 4, description: "Can't get enough of this burger!", restaurant_id: restaurant7.id, author_id: user8.id)


burger15 = Burger.create(name: "Sausage Breakfast Slider", rating: 4, description: "I had 10...", restaurant_id: restaurant13.id, author_id: user5.id)
file15 = open("https://flavorcheck-seed.s3-us-west-1.amazonaws.com/white-castle-burger.jpg")
burger15.photo.attach(io: file15, filename: "img_#{burger15.id}.jpg")


burger16 = Burger.create(name: "Shack Stack", rating: 5, description: "Shake Shacke > In N Out", restaurant_id: restaurant3.id, author_id: user9.id)

burger17 = Burger.create(name: "Gold Burger", rating: 5, description: "I will be a returning customer forsure", restaurant_id: restaurant14.id, author_id: user3.id)
file17 = open("https://flavorcheck-seed.s3-us-west-1.amazonaws.com/goldburger.jpg")
burger17.photo.attach(io: file17, filename: "img_#{burger17.id}.jpg")


burger18 = Burger.create(name: "Double Smashurger", rating: 5, description: "Never had a smashburger like this!!", restaurant_id: restaurant15.id, author_id: user6.id)
file18 = open("https://flavorcheck-seed.s3-us-west-1.amazonaws.com/burgers-never-say-die.jpg")
burger18.photo.attach(io: file18, filename: "img_#{burger18.id}.jpg")


burger19 = Burger.create(name: "Brunch Burger", rating: 4, description: "Just look at it...", restaurant_id: restaurant16.id, author_id: user2.id)
file19 = open("https://flavorcheck-seed.s3-us-west-1.amazonaws.com/gordan-ramsay-burger.jpg")
burger19.photo.attach(io: file19, filename: "img_#{burger19.id}.jpg")


burger20 = Burger.create(name: "Cheeseburger", rating: 4, description: "This picture does not do it justice", restaurant_id: restaurant17.id, author_id: user9.id)
file20 = open("https://flavorcheck-seed.s3-us-west-1.amazonaws.com/burgers99.jpg")
burger20.photo.attach(io: file20, filename: "img_#{burger20.id}.jpg")


burger21 = Burger.create(name: "The Original White Castle", rating: 2, description: "Taste exactly like the frozen ones..", restaurant_id: restaurant13.id, author_id: user3.id)


burger22 = Burger.create(name: "Pastrami burger", rating: 4, description: "The best secret in the valley!!", restaurant_id: restaurant18.id, author_id: user4.id)
file22 = open("https://flavorcheck-seed.s3-us-west-1.amazonaws.com/holiday-burger.jpg")
burger22.photo.attach(io: file22, filename: "img_#{burger22.id}.jpg")


burger23 = Burger.create(name: "The Fo Burger", rating: 2, description: "It was good but it's a little too expensive for me", restaurant_id: restaurant19.id, author_id: user5.id)
file23 = open("https://flavorcheck-seed.s3-us-west-1.amazonaws.com/father's-office.jpg")
burger23.photo.attach(io: file23, filename: "img_#{burger23.id}.jpg")


burger24 = Burger.create(name: "Pastrami Sandwich", rating: 4, description: "Not a burger but this taste so GOOD!", restaurant_id: restaurant22.id, author_id: user5.id)


burger25 = Burger.create(name: "DH Burger", rating: 3, description: "Expensive but LOOK AT THAT MEAT", restaurant_id: restaurant20.id, author_id: user6.id)
file25 = open("https://flavorcheck-seed.s3-us-west-1.amazonaws.com/amboy-quality-meats.jpg")
burger25.photo.attach(io: file25, filename: "img_#{burger25.id}.jpg")


burger26 = Burger.create(name: "Cheeseburger", rating: 5, description: "Just randomly saw this stand and it was the best!", restaurant_id: restaurant21.id, author_id: user4.id)
file26 = open("https://flavorcheck-seed.s3-us-west-1.amazonaws.com/tripp-burgers.jpg")
burger26.photo.attach(io: file26, filename: "img_#{burger26.id}.jpg")


burger27 = Burger.create(name: "Pork Adobo Burger", rating: 4, description: "This burger is slept on", restaurant_id: restaurant22.id, author_id: user2.id)
file27 = open("https://flavorcheck-seed.s3-us-west-1.amazonaws.com/the-oinkster.jpg")
burger27.photo.attach(io: file27, filename: "img_#{burger27.id}.jpg")


burger28 = Burger.create(name: "Cheeseburger", rating: 3, description: "Gave me the diner vibes", restaurant_id: restaurant23.id, author_id: user7.id)
file28 = open("https://flavorcheck-seed.s3-us-west-1.amazonaws.com/pie-n-burger.jpg")
burger28.photo.attach(io: file28, filename: "img_#{burger28.id}.jpg")


burger29 = Burger.create(name: "Bacon Cheeseburger", rating: 4, description: "Treat yo' self", restaurant_id: restaurant25.id, author_id: user6.id)


burger30 = Burger.create(name: "The Chance Burger", rating: 4, description: "Trust me... you need to give this burger a chance!", restaurant_id: restaurant24.id, author_id: user9.id)
file30 = open("https://flavorcheck-seed.s3-us-west-1.amazonaws.com/the-standing-room.jpg")
burger30.photo.attach(io: file30, filename: "img_#{burger30.id}.jpg")


burger31 = Burger.create(name: "Hawaiian", rating: 2, description: "I wish I got the Hula", restaurant_id: restaurant4.id, author_id: user5.id)


burger32 = Burger.create(name: "Bar burger", rating: 5, description: "Glad I ended up here!!", restaurant_id: restaurant14.id, author_id: user4.id)


burger33 = Burger.create(name: "Aged Cheddar and Bacon Burger", rating: 5, description: "This is the best burger hands down", restaurant_id: restaurant25.id, author_id: user8.id)
file33 = open("https://flavorcheck-seed.s3-us-west-1.amazonaws.com/burgers-and-brew.jpg")
burger33.photo.attach(io: file33, filename: "img_#{burger33.id}.jpg")


burger34 = Burger.create(name: "Lobster and Shrimp Burger", rating: 4, description: "HOW DID THEY COME UP WITH THIS!!", restaurant_id: restaurant16.id, author_id: user3.id)
file34 = open("https://flavorcheck-seed.s3-us-west-1.amazonaws.com/lobster-and-shrimp.jpg")
burger34.photo.attach(io: file34, filename: "img_#{burger34.id}.jpg")


burger35 = Burger.create(name: "Big Mac", rating: 5, description: "Why is this so beautiful 😍", restaurant_id: restaurant25.id, author_id: user2.id)
file35 = open("https://flavorcheck-seed.s3-us-west-1.amazonaws.com/bigmac.jpeg")
burger35.photo.attach(io: file35, filename: "img_#{burger35.id}.jpg")






