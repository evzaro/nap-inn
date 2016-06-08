var React = require('react');
var SpotIndexItem = require('./spot_index_item');
var NapSpotStore = require('../stores/nap_spot_store');
var ClientActions = require('../actions/client_actions');
var NapSpotApiUtil = require('../util/nap_spot_api_util');
var RouteActions = require('../actions/route_actions');
var Map = require('./map');


var SpotIndex = React.createClass({

  getInitialState: function() {
    return {
      nap_spots: NapSpotStore.all(),
      location: this.props.location
    };
  },

  componentDidMount: function() {
    RouteActions.changeRoute('/index');
    this.storeListener = NapSpotStore.addListener(this.handleChange);
  },

  componentWillUnmount: function() {
    this.storeListener.remove();
  },

  handleChange: function() {
    this.setState({
      nap_spots: NapSpotStore.all()
    });
  },

  render: function() {
    var index_items = [];
    if (this.state.nap_spots.length > 0){
       this.state.nap_spots.forEach(function(spot, i){
        index_items.push(<SpotIndexItem key={i} spot={spot}/>);
      });
    }

    return (
      <div className="index clearfix">
        <div className="index-items group">
          {index_items}
        </div>
        <div className="index-map-container">
          <Map location={this.state.location}/>
        </div>
      </div>
    );
  }
});

module.exports = SpotIndex;
