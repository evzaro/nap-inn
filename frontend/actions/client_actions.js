var NapSpotApiUtil = require('../util/nap_spot_api_util');

var ClientActions = {
  fetchNapSpots: NapSpotApiUtil.fetchNapSpots,

  createNapSpot: function(nap_spot){
     NapSpotApiUtil.createNapSpot(nap_spot);
   }
};

module.exports = ClientActions;
