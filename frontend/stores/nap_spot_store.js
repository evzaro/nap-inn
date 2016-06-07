var Store = require('flux/utils').Store;
var NapSpotConstants = require('../constants/nap_spot_constants');
var Dispatcher = require('../dispatcher/dispatcher');

var _spots = [];
var NapSpotStore = new Store(Dispatcher);

NapSpotStore.all = function () {
  var clone = _spots;
  return clone;
};

NapSpotStore.__onDispatch = function (payload){
  switch(payload.actionType) {
    case NapSpotConstants.SPOTS_RECEIVED:
    // payload.nap_spots.forEach(function(spot){
    //   _spots[spot.id] = spot;
    // });
  
    _spots = payload.nap_spots;
      NapSpotStore.__emitChange();
      break;
    case NapSpotConstants.SPOT_RECEIVED:
      // _spots[payload.nap_spot.id] = payload.nap_spot;
      _spots.push(payload.nap_spot);
      NapSpotStore.__emitChange();
      break;

  }
};

window.Store = NapSpotStore;
module.exports = NapSpotStore;
