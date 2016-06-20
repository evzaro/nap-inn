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
    _bookings = payload.bookings;
      BookingsStore.__emitChange();
      break;
    case "BOOKING_RECIEVED":
      _bookings.push(payload.booking);
      BookingsStore.__emitChange();
      break;

  }
};

module.exports = BookingsStore;
