var AppDispatcher = require('../dispatcher/dispatcher');
var NapSpotConstants = require('../constants/nap_spot_constants');

var ServerActions = {
  receiveAll: function(nap_spots){
    AppDispatcher.dispatch({
      actionType: BenchConstants.SPOTS_RECEIVED,
      nap_spots: nap_spots
    });
  },
  receiveSingleNapSpot: function(nap_spot){
    AppDispatcher.dispatch({
      actionType: BenchConstants.SPOT_RECEIVED,
      nap_spot: nap_spot
    });
  }
};

module.exports = ServerActions;
