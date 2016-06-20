var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher/dispatcher');

var _route = "";
var RouteStore = new Store(Dispatcher);

RouteStore.route = function () {
  var clone = _route;
  return clone;
};

RouteStore.__onDispatch = function (payload){
  switch(payload.actionType) {
    case "CHANGE_ROUTE":
      _route = payload.route;
  
      RouteStore.__emitChange();
      break;
  }
};

module.exports = RouteStore;
