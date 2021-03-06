var AppDispatcher = require('../dispatcher/dispatcher');
var NapSpotConstants = require('../constants/nap_spot_constants');

var ServerActions = {
  receiveAll: function(data){
    AppDispatcher.dispatch({
      actionType: NapSpotConstants.SPOTS_RECEIVED,
      nap_spots: data.nap_spots
    });
  },
  receiveSingleNapSpot: function(nap_spot){
    AppDispatcher.dispatch({
      actionType: NapSpotConstants.SPOT_RECEIVED,
      nap_spot: nap_spot
    });
  },
  removeNapSpot: function(nap_spot){
    AppDispatcher.dispatch({
      actionType: NapSpotConstants.SPOT_REMOVED,
      nap_spot: nap_spot
    });
  },
  receiveBookings: function(bookings){
    AppDispatcher.dispatch({
      actionType: "BOOKINGS_RECIEVED",
      bookings: bookings
    });
  },
  receiveBooking: function(booking){
    AppDispatcher.dispatch({
      actionType: "BOOKING_RECIEVED",
      booking: booking
    });
  },
  removeBooking: function(booking){
    AppDispatcher.dispatch({
      actionType: "BOOKING_REMOVED",
      booking: booking
    });
  }
};

module.exports = ServerActions;
