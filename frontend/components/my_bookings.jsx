var React = require('react');
var MyBookingItem = require('./my_booking_item');
var NapSpotStore = require('../stores/nap_spot_store');
var BookingsStore = require('../stores/bookings_store');
var ClientActions = require('../actions/client_actions');
var NapSpotApiUtil = require('../util/nap_spot_api_util');
var BookingApiUtil = require('../util/booking_api_util');
var RouteActions = require('../actions/route_actions');

var MyBookings = React.createClass({

  getInitialState: function() {
    return {
      bookings: BookingsStore.all().bookings,
      //nap_spots: NapSpotStore.all()
    };
  },

  componentDidMount: function() {
    RouteActions.changeRoute('index');
    this.storeListener = BookingsStore.addListener(this._handleChange);
    BookingApiUtil.fetchMyBookings();
    //1) fetch my bookings API and assocated nap spot id (my spot item)
    //2) add booking store listener
  },

  componentWillUnmount: function() {
    this.storeListener.remove();
  },

  _handleChange: function() {
    this.setState({
      bookings: BookingsStore.all().bookings
    });

  },

  // update: function(){
  //   this.forceUpdate();
  // },

  render: function() {

    var bookings = [];
    if (this.state.bookings !== undefined){
      this.state.bookings.forEach(function(booking, i){
        bookings.push(<MyBookingItem key={i} booking={booking}/>);
      });
    }
    
    return (
      <div className="my-spots clearfix">
        <div className="my-spots-items">
          {bookings}
        </div>
      </div>
    );
  }
});

module.exports = MyBookings;
