# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

ActiveRecord::Base.connection.reset_pk_sequence!('users')
#  RESETS THE PRIMARY KEY ID

user1 = User.create(username: "test", fullname: "test", password: "password", email: "test@aa.io")
user2 = User.create(username: "jonathan_dwight", fullname: "JD Buendia", password: "password", email: "jd@aa.io")
user3 = User.create(username: "tritop", fullname: "Tri Ta", password: "password", email: "tri@aa.io")
user4 = User.create(username: "jackpack", fullname: "Jacky Li", password: "password", email: "jacky@aa.io")
user5 = User.create(username: "petey", fullname: "Peter Min", password: "password", email: "peter@aa.io")
user6 = User.create(username: "cheetahluva", fullname: "Chris Lee", password: "password", email: "chris@aa.io")
user7 = User.create(username: "raveboi", fullname: "Jon Siu", password: "password", email: "jon@aa.io")
