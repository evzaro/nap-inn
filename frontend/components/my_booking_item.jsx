var React = require('react');
var ReactRouter = require('react-router');
var hashHistory = ReactRouter.hashHistory;
var NapSpotApiUtil = require('../util/nap_spot_api_util');

var MyBookingItem = React.createClass({

  goToDetail: function() {
      hashHistory.push({pathname: 'detail/' + this.props.spot.napspot_id});
  },

  deleteItem: function(){
    BookingApiUtil.destroyBooking(this.props.booking.id);
  },

  render: function() {

    return (
      <div className="my-spot-container">
        <div className="my-spot-content">
          <div className="my-img-wrapper"><img onClick={this.goToDetail} className="my-spot-img"
            src={this.props.booking.url}/>
          </div>

        </div>
        <h2 className="index-title">{this.props.booking.title}</h2>
        <h3 className="index-cat">{this.props.booking.date}</h3>
        <button onClick={this.deleteItem}>Delete Booking</button>
      </div>
    );
  }
});

module.exports = MyBookingItem ;
