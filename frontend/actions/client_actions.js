var NapSpotApiUtil = require('../util/nap_spot_api_util');
var BookingApiUtil = require('../util/booking_api_util');

var ClientActions = {
  fetchNapSpots: function(bounds){
    NapSpotApiUtil.fetchNapSpots(bounds);
  },

  createNapSpot: function(nap_spot){
     NapSpotApiUtil.createNapSpot(nap_spot);
   },

   createBooking: function(booking){
     BookingApiUtil.createBooking(booking);
   }
};

module.exports = ClientActions;
