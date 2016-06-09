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
    console.log(this.state.spot);
    return (
      <div className="detail">
        <img src={this.state.spot.image_urls}/>
      </div>
    );
  }
});

module.exports = SpotDetail;
