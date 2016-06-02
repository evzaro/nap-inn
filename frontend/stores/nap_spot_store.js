var Store = require('flux/utils').Store;
var NapSpotConstants = require('../constants/bench_constants');
var Dispatcher = require('../dispatcher/dispatcher');

var _napSpots = [];
var NapSpotStore = new Store(Dispatcher);

NapSpotStore.all = function () {
  return _napSpots.slice();
};


module.exports = NapSpotStore;
