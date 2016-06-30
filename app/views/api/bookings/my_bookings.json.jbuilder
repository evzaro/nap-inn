json.bookings @bookings do |booking|
  json.id booking.id
  json.napspot_id booking.napspot_id
  json.napper_id booking.napper_id
  json.date booking.date
  json.reserved_blocks booking.reserved_blocks
  json.url booking.napspot.image_urls
  json.title booking.napspot.title
end
