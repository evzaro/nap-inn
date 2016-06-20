var SessionActions = require('./../actions/session_actions');

var UserApiUtil = {
  signup: function (formData) {
    $.ajax({
      url: '/api/user',
      type: 'POST',
      dataType: 'json',
      data: {user: formData},
      success: function (currentUser) {
        console.log('UserApiUtil#createAccount success');
        SessionActions.receiveCurrentUser(currentUser);
      },
      error: function (xhr) {
        console.log('UserApiUtil#createAccount error');
      }
    });
  }
};

module.exports = UserApiUtil;
