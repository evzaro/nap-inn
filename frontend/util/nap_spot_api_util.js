var ServerActions = require('../actions/server_actions');


var NapSpotApiUtil = {
  fetchNapSpots: function(filters){
    $.get('api/nap_spots', filters, function(nap_spots){
      ServerActions.receiveAll(nap_spots);
    });
  },
  createNapSpot: function(data){
    $.post('api/nap_spots', { nap_spot: data }, function(nap_spot) {
      ServerActions.receiveSingleBench(nap_spot);
    });
  },
};

module.exports = NapSpotApiUtil;
