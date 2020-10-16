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

# ActiveRecord::Base.connection.reset_pk_sequence!('users')
#  RESETS THE PRIMARY KEY ID

user1 = User.create(username: "demo_user", name: "Demo User", password: "password", email: "test@aa.io")
user2 = User.create(username: "jonathan_dwight", name: "JD Buendia", password: "password", email: "jd@aa.io")
user3 = User.create(username: "tritop", name: "Tri Ta", password: "password", email: "tri@aa.io")
user4 = User.create(username: "jackpack", name: "Jacky Li", password: "password", email: "jacky@aa.io")
user5 = User.create(username: "petey", name: "Peter Min", password: "password", email: "peter@aa.io")
user6 = User.create(username: "cheetahluva", name: "Chris Lee", password: "password", email: "chris@aa.io")
user7 = User.create(username: "raveboi", name: "Jon Siu", password: "password", email: "jon@aa.io")

restaurant1 = Restaurant.create(name: "McDonald's")
restaurant2 = Restaurant.create(name: "In-N-Out")
restaurant3 = Restaurant.create(name: "Shake Shack")

burger1 = Burger.create(name: "McDouble", rating: 3, description: "It was really good with Mac sauce!!", restaurant_id: restaurant1.id, author_id: user2.id)
burger2 = Burger.create(name: "Double Double", rating: 4, description: "First time having it! It was AMAZING!!", restaurant_id: restaurant2.id, author_id: user3.id)
burger3 = Burger.create(name: "ShackBurger", rating: 2, description: "It was okay.... Not worth the price...", restaurant_id: restaurant3.id, author_id: user4.id)






