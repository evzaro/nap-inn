var SessionActions = require('../actions/session_actions');

var SessionApiUtil = {

  login: function (credentials){
    $.ajax({
      type: "POST",
      url: "/api/session",
      data: {user: credentials},
      success: function(currentUser){
        console.log("Login success (SessionApiUtil#login)");
        SessionActions.receiveCurrentUser(currentUser);
      },
      error: function (xhr) {
			  console.log("Login error in SessionApiUtil#login");
      }
    });
  },

  logout: function (){
  $.ajax({
    type: "DELETE",
    url: "/api/session",
    success: function(currentUser){
      console.log("Logout success (SessionApiUtil#logout)");
      SessionActions.removeCurrentUser();
    },
    error: function (xhr) {
      console.log("Logout error in SessionApiUtil#login");
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
			  console.log("Error in SessionApiUtil#fetchCurrentUser");
			},
      complete: complete
		});
	}
};

module.exports = SessionApiUtil;
