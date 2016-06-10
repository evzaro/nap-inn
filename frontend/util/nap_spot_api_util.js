var ServerActions = require('../actions/server_actions');


var NapSpotApiUtil = {
  fetchNapSpots: function (bounds){
    $.ajax({
      type: "GET",
      url: "api/nap_spots",
      data: {'bounds': bounds},
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
      dataType: 'json',
      success: function (nap_spot){
        ServerActions.receiveSingleNapSpot(nap_spot);
      }
    });
  },
  fetchNapSpot: function (id){
    $.ajax({
      type: "GET",
      url: "api/nap_spots/" + id,
      success: function (nap_spot){
        ServerActions.receiveSingleNapSpot(nap_spot);
      }
    });
  },
  fetchMySpots: function (){
    $.ajax({
      type: "GET",
      url: '/nap_spots/my_nap_spots',
      success: function (data){
        ServerActions.receiveAll(data);
      }
    });
  },
  destroySpot: function (id){
    $.ajax({
      type: "DELETE",
      url: '/api/nap_spots/' + id,
      success: function (data){

        ServerActions.removeNapSpot(data);
      }
    });
  },
};


module.exports = NapSpotApiUtil;
