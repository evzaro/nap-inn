var React = require('react');
var MySpotItem = require('./my_spot_item');
var NapSpotStore = require('../stores/nap_spot_store');
var BookingsStore = require('../stores/bookings_store');
var ClientActions = require('../actions/client_actions');
var NapSpotApiUtil = require('../util/nap_spot_api_util');
var RouteActions = require('../actions/route_actions');



var MyBookings = React.createClass({

  getInitialState: function() {
    return {
      bookings: BookingsStore.all(),
      nap_spots: NapSpotStore.all()
    };
  },

  componentDidMount: function() {
    // NapSpotApiUtil.fetchMySpots();
    // RouteActions.changeRoute('index');
    // this.storeListener = NapSpotStore.addListener(this.handleChange);
    //1) fetch my bookings API and assocated nap spot id (my spot item)
    //2) add booking store listener
  },

  componentWillUnmount: function() {
    this.storeListener.remove();
  },

  handleChange: function() {
    this.setState({
      nap_spots: NapSpotStore.all()
    });
  },

  update: function(){
    this.forceUpdate();
  },

  render: function() {

    var spots = [];
    if (this.state.nap_spots.length > 0){
       this.state.nap_spots.forEach(function(spot, i){
        spots.push(<MySpotItem key={i} spot={spot} updateParent={this.update}/>);
      }.bind(this));
    }

    return (
      <div className="my-spots clearfix">
        <div className="my-spots-items">
          {spots}
        </div>

      </div>
    );
  }
});

module.exports = MyBookings;
