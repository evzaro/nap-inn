# Flux Cycles

Flux loops are organized by data type. Under each data type, there may
be sub-categories, and each action is listed with the sequence of events
that result from its invocation, ending with the API or store. Finally,
store listeners are listed at the end.

You should be able to use this document trace an **action** starting
with where it was invoked, through the **API**/**store** involved, and
finally to the **components** that update as a result. This is important
because once you start implementing your flux loops, that's precisely
what you'll need to do.


## NapSpot Cycles

### NapSpots API Request Actions

* `fetchAllNapSpots`
  0. invoked from `NapSpotsIndex` `didMount`/`willReceiveProps`
  0. `GET /api/napspots` is called.
  0. `receiveAllNapSpots` is set as the callback.

* `createNapSpot`
  0. invoked from `NapSpotForm` submit button `onClick`
  0. `POST /api/napspots` is called.
  0. `receiveSingleNapSpot` is set as the callback.

* `fetchSingleNapSpot`
  0. invoked from `NapSpotDetail` `didMount`/`willReceiveProps`
  0. `GET /api/napspot/:napspot_id` is called.
  0. `receiveSingleNapSpot` is set as the callback.

* `updateNapSpot`
  0. invoked from `NapSpotForm`
  0. `PATCH /api/napspot/:napspot_id` is called.
  0. `receiveSingleNapSpot` is set as the callback.

* `destroyNapSpot`
  0. invoked from remove listed napspot button `onClick`
  0. `DELETE /api/napspot/:napspot_id` is called.
  0. `removeNapSpot` is set as the callback.

### NapSpots API Response Actions

* `receiveAllNapSpots`
  0. invoked from an API callback.
  0. `NapSpot` store updates `_napspots` and emits change.

* `receiveSingleNapSpot`
  0. invoked from an API callback.
  0. `NapSpot` store updates `_napspots[id]` and emits change.

* `removeNapSpot`
  0. invoked from an API callback.
  0. `NapSpot` store removes `_napspots[id]` and emits change.

### Store Listeners

* `NapSpotIndex` component listens to `NapSpot` store (as does child component `map`).
* `NapSpotDetail` component listens to `NapSpot` store.


## Review Cycles

### Reviews API Request Actions

* `fetchAllReviews`
  0. invoked from `ReviewsIndex` `didMount`/`willReceiveProps`
  0. `GET /api/napspot/:napspot_id/reviews` is called.
  0. `receiveAllReviews` is set as the callback.

* `createReview`
  0. invoked from `ReviewForm`
  0. `POST /api/napspot/:napspot_id/reviews` is called.
  0. `receiveSingleReview` is set as the callback.

* `fetchSingleReview`
  0. invoked from `ReviewDetail` (optional) `didMount`/`willReceiveProps`
  0. `GET /api/review/:review_id/` is called.
  0. `receiveSingleReview` is set as the callback.

* `updateReview`
  0. invoked from `ReviewForm`
  0. `PATCH /api/review/:review_id` is called.
  0. `receiveSingleReview` is set as the callback.

* `destroyReview`
  0. invoked from delete review button `onClick`
  0. `DELETE /api/review/:review_id` is called.
  0. `removeReview` is set as the callback.

### Reviews API Response Actions

* `receiveAllReviews`
  0. invoked from an API callback.
  0. `Review` store updates `_reviews` and emits change.

* `receiveSingleReview`
  0. invoked from an API callback.
  0. `Review` store updates `_reviews[id]` and emits change.

* `removeReview`
  0. invoked from an API callback.
  0. `Review` store removes `_reviews[id]` and emits change.

### Store Listeners

* `ReviewsIndex` component listens to `Review` store.


## Booking Cycles

### Bookings API Request Actions

* `fetchAllBookings`
  0. invoked from `BookingsIndex` `didMount`/`willReceiveProps`
  0. `GET /api/napspot/:napspot_id/bookings` is called.
  0. `receiveAllBookings` is set as the callback.

* `createBooking`
  0. invoked from `BookingForm`
  0. `POST /api/napspot/:napspot_id/bookings` is called.
  0. `receiveSingleBooking` is set as the callback.

<!-- * `fetchSingleBooking`
  0. invoked from `BookingDetail` `didMount`/`willReceiveProps`
  0. `GET /api/booking/:booking_id/` is called.
  0. `receiveSingleBooking` is set as the callback. -->

* `updateBooking`
  0. invoked from `BookingForm`
  0. `PATCH /api/booking/:booking_id` is called.
  0. `receiveSingleBooking` is set as the callback.

* `destroyBooking`
  0. invoked from delete booking button `onClick`
  0. `DELETE /api/booking/:booking_id` is called.
  0. `removeBooking` is set as the callback.

### Bookings API Response Actions

* `receiveAllBookings`
  0. invoked from an API callback.
  0. `Booking` store updates `_bookings` and emits change.

* `receiveSingleBooking`
  0. invoked from an API callback.
  0. `Booking` store updates `_bookings[id]` and emits change.

* `removeBooking`
  0. invoked from an API callback.
  0. `Booking` store removes `_bookings[id]` and emits change.

### Store Listeners

* `BookingsIndex` `BookingsForm` and `NapSpotFilter` components listen to `Booking` store.

## Availability Cycles

### Availabilities API Request Actions

* `fetchAllAvailabilities`
  0. invoked from `AvailabilitiesIndex` `didMount`/`willReceiveProps`
  0. `GET /api/napspot/:napspot_id/availabilities` is called.
  0. `receiveAllAvailabilities` is set as the callback.

* `createAvailability`
  0. invoked from `NapSpotForm`
  0. `POST /api/napspot/:napspot_id/availabilities` is called.
  0. `receiveSingleAvailability` is set as the callback.

* `destroyAvailability`
  0. invoked from delete booking button `onClick`
  0. `DELETE /api/booking/:booking_id` is called.
  0. `removeAvailability` is set as the callback.

### Availabilities API Response Actions

* `receiveAllAvailabilities`
  0. invoked from an API callback.
  0. `Availability` store updates `_availabilities` and emits change.

* `receiveSingleAvailability`
  0. invoked from an API callback.
  0. `Availability` store updates `_availabilities[id]` and emits change.

* `removeAvailability`
  0. invoked from an API callback.
  0. `Availability` store removes `_availabilities[id]` and emits change.

### Store Listeners

* `BookingsForm` and `NapSpotFilter` components listen to `Availability` store.
