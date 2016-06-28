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

fetchMyBookings: function (napper_id){
  $.ajax({
    type: "GET",
    url: "api/bookings/my_bookings",
    data: {'napper_id': napper_id},
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

};
