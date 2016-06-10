var React = require('react');
var NapSpotStore = require('../stores/nap_spot_store');
var ClientActions = require('../actions/client_actions');
var NapSpotApiUtil = require('../util/nap_spot_api_util');
var RouteActions = require('../actions/route_actions');

var SpotDetail = React.createClass({
  getInitialState: function() {
    return({spot: NapSpotStore.currentSpot()});
  },

  componentDidMount: function() {
    RouteActions.changeRoute('detail');
    NapSpotApiUtil.fetchNapSpot(this.props.params.id);
    this.storeListener = NapSpotStore.addListener(this.handleChange);
  },

  componentWillUnmount: function() {
    this.storeListener.remove();
  },

  handleChange: function() {
    this.setState(
      {spot: NapSpotStore.currentSpot()}
    );
  },

  render: function() {
    var city = "";
    var state = "";
    var country = "";
    var location;

    if(this.state.spot.location){
      location = JSON.parse(this.state.spot.location);
      city = location.locality;
      state = location.administrative_area_level_1;
      country = location.country;
    }

    // b_rgb:c8c8c8,c_pad,h_230,w_330 old transform for detail
    var divStyle = {
      backgroundImage: 'url(' + this.state.spot.image_urls + ')'
    };

    return (
      <div className="detail">

        <div className="cover-img" style={divStyle}>
        </div>
        <div className="summary">
        <div className="info-and-booking">

          <h2>{this.state.spot.title}</h2>

          <span className="location">
            <h3>{city + ", " + state + ", " + country}</h3>
          </span>

          <div className="detail-icons group">
            <div className="category-icon"><h3>{this.state.spot.category}</h3></div>
            <div className="capacity-icon"><h3>{this.state.spot.capacity + " Nappers"}</h3></div>
          </div>

          <div className="booking-content">
            <span className="price-wrapper"><h3>{'$' + this.state.spot.price}</h3></span>
          </div>
        </div>
          <div className="description group">
            <h3>About this spot:</h3>
            <p>{this.state.spot.description}</p>

          </div>

        </div>
      </div>
    );
  }
});

module.exports = SpotDetail;
