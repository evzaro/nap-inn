var React = require('react');
var ReactRouter = require('react-router');
var hashHistory = ReactRouter.hashHistory;


var SpotIndexItem = React.createClass({

  goToDetail: function() {
      hashHistory.push({pathname: 'detail/' + this.props.spot.id});
  },

  render: function() {
    return (
      <div className="index-item-container">
        <div className="index-item-content">
          <img onClick={this.goToDetail} className="index-item-img" src={this.props.spot.image_url}/>
          <span>{this.props.spot.price}</span>
          <div></div>
        </div>
        <h2 className="index-title">{this.props.spot.title}</h2>
        <h3 className="index-cat">{this.props.spot.category}</h3>
      </div>
    );
  }
});

module.exports = SpotIndexItem;
