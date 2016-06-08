json.nap_spots @nap_spots do |nap_spot|
  json.title nap_spot.title
  json.owner_id  nap_spot.owner_id
  json.price number_to_currency nap_spot.price
  json.title nap_spot.title
  json.category nap_spot.category
  json.image_url nap_spot.image_urls
  json.latlng JSON.parse(nap_spot.location)['latlng']



end
