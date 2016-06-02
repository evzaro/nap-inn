var NapSpotApiUtil = require('../util/nap_spot_api_util');

var ClientActions = {
  fetchNapSpots: NapSpotApiUtil.fetchNapSpots,
  createNapSpot: NapSpotApiUtil.createNapSpot,
};

module.exports = ClientActions;
