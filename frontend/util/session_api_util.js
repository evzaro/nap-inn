var SessionActions = require('../actions/session_actions');

var SessionApiUtil = {

  login: function (credentials){
    $.ajax({
      type: "POST",
      url: "/api/session",
      data: {user: credentials},
      success: function(currentUser){

        SessionActions.receiveCurrentUser(currentUser);
      },
      error: function (xhr) {

      }
    });
  },

  logout: function (){
  $.ajax({
    type: "DELETE",
    url: "/api/session",
    success: function(currentUser){

      SessionActions.removeCurrentUser();
    },
    error: function (xhr) {

    }
  });
  },

  fetchCurrentUser: function (complete) {
		$.ajax({
			url: "/api/session",
			method: 'GET',
			success: function (currentUser) {
			  SessionActions.receiveCurrentUser(currentUser);
			},
			error: function (xhr) {

			},
      complete: complete
		});
	}
};

module.exports = SessionApiUtil;
