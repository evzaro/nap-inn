json.nap_spots @nap_spots do |nap_spot|
  json.id nap_spot.id
  json.title nap_spot.title
  json.owner_id  nap_spot.owner_id
  json.price number_to_currency nap_spot.price
  json.title nap_spot.title
  json.category nap_spot.category
  json.image_url nap_spot.image_urls
  json.lat nap_spot.lat
  json.lng nap_spot.lng



end
