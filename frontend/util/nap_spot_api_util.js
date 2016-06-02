var ServerActions = require('../actions/server_actions');


var NapSpotApiUtil = {
  fetchNapSpots: function (){
    $.ajax({
      type: "GET",
      url: "api/nap_spots",
      success: function (data){
        ServerActions.receiveAll(data);
      }
    });
  },
  createNapSpot: function (nap_spot){
    $.ajax({
      type: "POST",
      url: "api/nap_spots",
      data: {'nap_spot': nap_spot},
      success: function (nap_spot){
        ServerActions.receiveSingleNapSpot(nap_spot);
      }
    });
  },
};

window.Util = NapSpotApiUtil;
module.exports = NapSpotApiUtil;
