var ServerActions = require('../actions/server_actions');

module.exports = {
fetchBookings: function (napspot_id){
  $.ajax({
    type: "GET",
    url: "api/bookings",
    data: {'napspot_id': napspot_id},
    success: function (data){
      ServerActions.receiveBookings(data);
    }
  });
},

fetchMyBookings: function (){
  $.ajax({
    type: "GET",
    url: "/bookings/my_bookings",
    success: function (data){
      ServerActions.receiveBookings(data);
    }
  });
},

createBooking: function (booking){
  $.ajax({
    type: "POST",
    url: "api/bookings",
    data: {'booking': booking},
    dataType: 'json',
    success: function (booking){
      ServerActions.receiveBooking(booking);
    }
  });
},

  destroyBooking: function (id){
    $.ajax({
      type: "DELETE",
      url: '/api/bookings/' + id,
      success: function (data){
        ServerActions.removeNapSpot(data);
      }
    });
  }

};
