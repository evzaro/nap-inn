var React = require('react');
var ReactRouter = require('react-router');
var hashHistory = ReactRouter.hashHistory;
var NapSpotApiUtil = require('../util/nap_spot_api_util');

var MySpotItem = React.createClass({

  goToDetail: function() {
      hashHistory.push({pathname: 'detail/' + this.props.spot.id});
  },

  deleteItem: function(){
    NapSpotApiUtil.destroySpot(this.props.spot.id);
  },

  render: function() {
    return (
      <div className="my-spot-container">
        <div className="my-spot-content">
          <div className="my-img-wrapper"><img onClick={this.goToDetail} className="my-spot-img"
            src={this.props.spot.image_url}/>
          </div>

        </div>
        <h2 className="index-title">{this.props.spot.title}</h2>
        <h3 className="index-cat">{this.props.spot.category}</h3>
        <button onClick={this.deleteItem}>Delete Listing</button>
      </div>
    );
  }
});

module.exports = MySpotItem ;
