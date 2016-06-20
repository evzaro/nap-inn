var SessionActions = require('./../actions/session_actions');

var UserApiUtil = {
  signup: function (formData) {
    $.ajax({
      url: '/api/user',
      type: 'POST',
      dataType: 'json',
      data: {user: formData},
      success: function (currentUser) {

        SessionActions.receiveCurrentUser(currentUser);
      },
      error: function (xhr) {
      
      }
    });
  }
};

module.exports = UserApiUtil;
