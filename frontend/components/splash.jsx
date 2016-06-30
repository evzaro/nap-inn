var React = require('react');
var PropTypes = React.PropTypes;
var Search = require('./search');
var MySpotItem = require('./my_spot_item');
var NapSpotApiUtil = require('../util/nap_spot_api_util');
var NapSpotStore = require('../stores/nap_spot_store');

var Splash = React.createClass({

  // getInitialState: function() {
  //   return {
  //     spot: NapSpotStore.currentSpot()
  //     //nap_spots: NapSpotStore.all()
  //   };
  // },
  //
  // componentDidMount: function() {
  //   NapSpotApiUtil.fetchNapSpot(1);
  //   // RouteActions.changeRoute('index');
  //   this.storeListener = NapSpotStore.addListener(this._handleChange);
  //   // BookingApiUtil.fetchMyBookings();
  //   // //1) fetch my bookings API and assocated nap spot id (my spot item)
  //   // //2) add booking store listener
  // },

  _handleChange: function(){
    this.setState({
      spot: NapSpotStore.currentSpot()
    });
  },

  render: function() {

    var saying;
    var saying1 = "Find Your Bliss";
    var saying2 = "Micro-Stays Around The World";
    if (Math.random() > 0.5){
      saying = saying1;
    } else {
      saying = saying2;
    }

    var divStyle = {
      backgroundImage: "url('http://res.cloudinary.com/dfjm0djds/image/upload/v1465575392/background_uzpwdt.jpg')"
    };

    return (
      <div>
        <Search/>
        <div className="background" style={divStyle}>
          <h1 className="splash-header">{saying}</h1>
        </div>
    </div>
    );
  }
});

module.exports = Splash;
