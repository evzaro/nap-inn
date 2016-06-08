var NapSpotApiUtil = require('../util/nap_spot_api_util');

var ClientActions = {
  fetchNapSpots: function(bounds){
    NapSpotApiUtil.fetchNapSpots(bounds);
  },

  createNapSpot: function(nap_spot){
     NapSpotApiUtil.createNapSpot(nap_spot);
   }
};

module.exports = ClientActions;
