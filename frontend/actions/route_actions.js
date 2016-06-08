var AppDispatcher = require('../dispatcher/dispatcher');


var RouteActions = {
  changeRoute: function(route){
    AppDispatcher.dispatch({
      actionType: "CHANGE_ROUTE",
      route: route
    });
  }
};

module.exports = RouteActions;
