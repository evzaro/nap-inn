# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

5.times do
  User.create!(user_email: Faker::Internet.email, password: "password", fname: Faker::Name.first_name, lname: Faker::Name.last_name )
end


5.times do
  NapSpot.create!(
    title: (Faker::Hipster.word + 'spot'),
    description: Faker::Hipster.paragraph,
    owner_id: User.all.sample.id,
    category: "Hammock",
    capacity: rand(5)+1,
    location: "New York, NY",
    price: rand(50)+5
  )
end
