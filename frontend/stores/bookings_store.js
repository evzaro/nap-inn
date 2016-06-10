var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher/dispatcher');

var _bookings = [];

var BookingsStore = new Store(Dispatcher);

BookingsStore.all = function () {
  var clone = _bookings;
  return clone;
};


BookingsStore.__onDispatch = function (payload){
  switch(payload.actionType) {
    case "BOOKINGS_RECIEVED":
    // payload.bookings.forEach(function(spot){
    //   _spots[spot.id] = spot;
    // });

    _bookings = payload.bookings;
      BookingsStore.__emitChange();
      break;
    case "BOOKING_RECIEVED":
      // _spots[payload.nap_spot.id] = payload.nap_spot;
      _bookings.push(payload.booking);

      BookingsStore.__emitChange();
      break;

  }
};

module.exports = BookingsStore;
