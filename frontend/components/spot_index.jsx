var React = require('react');
var SpotIndexItem = require('./spot_index_item');
var NapSpotStore = require('../stores/nap_spot_store');
var ClientActions = require('../actions/client_actions');
var NapSpotApiUtil = require('../util/nap_spot_api_util');
var Map = require('./map');


var SpotIndex = React.createClass({

  getInitialState: function() {
    return {
      nap_spots: NapSpotStore.all()
    };
  },

  componentDidMount: function() {
    NapSpotApiUtil.fetchNapSpots();
    NapSpotStore.addListener(this.handleChange);
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
          <Map/>
        </div>
      </div>
    );
  }
});

module.exports = SpotIndex;
