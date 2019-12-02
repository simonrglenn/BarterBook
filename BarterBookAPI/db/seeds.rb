
User.delete_all
Currency.delete_all
Contract.delete_all 

User.create(id: 1, given_name: "simon", family_name: "glenn", email: "simonrglenn@gmail.com", username: "simonrglenn",)
User.create(id: 2, given_name: "johnson", family_name: "morplebutt", email: "morps@yahoo.com", username: "jmorps",)
User.create(id: 3, given_name: "mister", family_name: "poopybutthole", email: "MP@uk.gov", username: "poop",)
User.create(id: 4, given_name: "captain", family_name: "hook", email: "captainhook@piratebay.cool", username: "hooky",)


Currency.create!(id: 1, user_id: 1, title: "couch", text: "I will give you my couch", img_url: "http://farm6.staticflickr.com/5103/5772396223_423e566333_z.jpg", listed: true)
Currency.create!(id: 2, user_id: 1, title: "car", text: "I will give you my car", img_url: "https://previews.123rf.com/images/tverdohlib/tverdohlib1507/tverdohlib150700166/42090060-old-aged-rusty-broken-depreciated-retro-car-standing-on-gravel-ground-outdoor-horizontal-picture.jpg", listed: true)
Currency.create!(id: 3, user_id: 2, title: "car mechanic", text: "I will fix your car", img_url: "https://www.cashautosalvage.com/wp-content/uploads/sell-broken-car.jpeg", listed: true)
Currency.create!(id: 4, user_id: 3, title: "Carpenter", text: "I will build a wood", img_url: "https://www.sheltonstate.edu/wp-content/uploads/2018/05/Carpenty-2018.jpg")
Currency.create!(id: 5, user_id: 4, title: "Scuba Instructor", text: "I will SCUBA you and your loved ones", img_url: "https://www.deeperblue.com/wp-content/uploads/2016/02/AdobeStock_2689999.jpeg", listed: true)
Currency.create!(id: 6, user_id: 2, title: "Free hot air balloon", text: "Leaks have been fixed, I think", img_url: "https://cdn.britannica.com/84/158184-050-1D7ADEB5/balloon.jpg", listed: true)
Currency.create!(id: 7, user_id: 1, title: "Free hot air balloon 1", text: "1 Leaks have been fixed, I think", img_url: "https://cdn.britannica.com/84/158184-050-1D7ADEB5/balloon.jpg", listed: false)
Currency.create!(id: 8, user_id: 4, title: "Free hot air balloon 2", text: "2 Leaks have been fixed, I think", img_url: "https://cdn.britannica.com/84/158184-050-1D7ADEB5/balloon.jpg", listed: false)


Contract.create(id: 1, needed_currency_id: "1", offered_currency_id: "6", pending?: true)
Contract.create(id: 2, needed_currency_id: "1", offered_currency_id: "4", pending?: true)
Contract.create(id: 3, needed_currency_id: "3", offered_currency_id: "5", pending?: true)
Contract.create(id: 4, needed_currency_id: "6", offered_currency_id: "2", pending?: true)
Contract.create(id: 5, needed_currency_id: "4", offered_currency_id: "6", pending?: true)
Contract.create(id: 6, needed_currency_id: "7", offered_currency_id: "8", pending?: false)
