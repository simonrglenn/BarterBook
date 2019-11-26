# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
:given_name, :family_name:, :email:, :username:)

User.create(id: 1, given_name: "simon", family_name: "glenn", email: "simonrglenn@gmail.com", username: "simonrglenn",)
User.create(id: 2, given_name: "johnson", family_name: "morplebutt", email: "morps@yahoo.com", username: "jmorps",)
User.create(id: 3, given_name: "mister", family_name: "poopybutthole", email: "MP@uk.gov", username: "poop",)
User.create(id: 4, given_name: "captain", family_name: "hook", email: "captainhook@piratebay.cool", username: "hooky",)


Currency.create(title: "couch", text: "I will give you my couch", img_url: "http://farm6.staticflickr.com/5103/5772396223_423e566333_z.jpg")
Currency.create(title: "", text: "", img_url: "")
Currency.create(title: "", text: "", img_url: "")
Currency.create(title: "", text: "", img_url: "")
Currency.create(title: "", text: "", img_url: "")
Currency.create(title: "", text: "", img_url: "")


Contract.create(needed_id: "", offered_id: "", pending?: true)
Contract.create(needed_id: "", offered_id: "", pending?: true)
Contract.create(needed_id: "", offered_id: "", pending?: true)