var React = require('react');


var SpotIndexItem = React.createClass({

  //markers

  render: function() {

    return (
      <div className="index-item-container">
        <div className="index-item-content">
          <img className="index-item-img" src={this.props.spot.image_url}/>
          <span>{this.props.spot.price}</span>
          <div></div>
          <h2 className="index-title">{this.props.spot.title}</h2>
          <h3 className="index-cat">{this.props.spot.category}</h3>
        </div>
      </div>
    );
  }
});

module.exports = SpotIndexItem;
