var Dispatcher = require('../dispatcher/dispatcher.js');
var Store = require('flux/utils').Store;
var SessionConstants = require('../constants/session_constants');

var SessionStore = new Store(Dispatcher);

var _currentUser = {};
var currentUserHasBeenFetched = false;

SessionStore.isUserLoggedIn = function (){
   return ( _currentUser.id === undefined ?  false : true );
};

function _login(currentUser) {
  _currentUser = currentUser;
  _currentUserHasBeenFetched = true;
}

function _logout() {
  _currentUser = {};
  _currentUserHasBeenFetched = true;
}

SessionStore.currentUser = function () {
  var _currentUserClone = _currentUser;
  return _currentUserClone;
};

SessionStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case SessionConstants.LOGIN:
      _login(payload.currentUser);
      SessionStore.__emitChange();
      break;
    case SessionConstants.LOGOUT:
    	_logout();
      SessionStore.__emitChange();
      break;
  }
};
module.exports = SessionStore;
