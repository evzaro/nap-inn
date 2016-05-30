# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

### Users

- `GET /users/new`
- `POST /users`
- `PATCH /users`

### Session

- `GET /session/new`
- `POST /session`
- `DELETE /session`

## JSON API

### NapSpots

- `GET /api/napspots`
  - NapSpots index/search
  - accepts location, price, availability, and type query params to filter spots
- `POST /api/napspot`
- `GET /api/napspot/:napspot_id`: NapPostDetail View
- `PATCH /api/napspot/:napspot_id`
- `DELETE /api/napspot/:napspot_id`

### Bookings

- An owner can view bookings in the user show template for all his/her napspots.
- `GET /api/napspot/:napspot_id/bookings`
- `POST /api/napspot/:napspot_id/bookings`
- `PATCH /api/booking/:booking_id`
- `DELETE /api/review/:booking_id`: delete review

### Availabilities

- `GET /api/napspot/:napspot_id/availabilities`: gets all available time frames for a given napspot
- `POST /api/napspot/:napspot_id/availabilities` creates a new available time frame for a given napspot
- `DELETE /api/availability/:availability_id`: delete available time slot

### Reviews

- A napspot's reviews will be included in the napspot show template
- `GET /api/napspot/:napspot_id/reviews`
- `POST /api/napspot/:napspot_id/reviews`: add review to napspot by name
- `PATCH /api/review/:review_id`: edit review
- `DELETE /api/review/:review_id`: delete review from napspot
