var Store = require('flux/utils').Store;
var NapSpotConstants = require('../constants/nap_spot_constants');
var Dispatcher = require('../dispatcher/dispatcher');

var _spots = [];
var _currentSpot = {};
var NapSpotStore = new Store(Dispatcher);

NapSpotStore.all = function () {
  var clone = _spots;
  return clone;
};

NapSpotStore.currentSpot = function () {
  return _currentSpot;
};

NapSpotStore.__onDispatch = function (payload){
  switch(payload.actionType) {
    case NapSpotConstants.SPOTS_RECEIVED:
    _spots = payload.nap_spots;
      NapSpotStore.__emitChange();
      break;
    case NapSpotConstants.SPOT_RECEIVED:
      _spots.push(payload.nap_spot);
      _currentSpot = payload.nap_spot;
      NapSpotStore.__emitChange();
      break;
    case NapSpotConstants.SPOT_REMOVED:
      var result = [];
      for (var i = 0; i < _spots.length; i++) {
        if (_spots[i].id !== payload.nap_spot.id){
          result.push(_spots[i]);
        }
      }
      _spots = result;
      NapSpotStore.__emitChange();
      break;

  }
};

module.exports = NapSpotStore;
