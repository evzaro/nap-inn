var React = require('react');
var PropTypes = React.PropTypes;
var Search = require('./search');
var MySpotItem = require('./my_spot_item');
var NapSpotApiUtil = require('../util/nap_spot_api_util');
var NapSpotStore = require('../stores/nap_spot_store');

var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var hashHistory = ReactRouter.hashHistory;

var Splash = React.createClass({

  _handleChange: function() {
    this.setState({
      spot: NapSpotStore.currentSpot()
    });
  },

  goToDC: function() {
    hashHistory.push('/index/38.9071923&-77.03687070000001');
  },

  goToNY: function() {
    hashHistory.push('/index/40.7127837&-74.00594130000002');
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

    var url;
    var url1 = 'http://res.cloudinary.com/dfjm0djds/image/upload/v1469028184/sleepsplash3web_oppa4u.jpg';
    var url2 = 'http://res.cloudinary.com/dfjm0djds/image/upload/v1469028182/sleepsplash1web_avebzi.jpg';
    if (Math.random() > 0.5){
      url = url1;
    } else {
      url = url2;
    }

    var divStyle = {
      backgroundImage: "url(" + url + ")"
    };


    return (
      <div>
        <Search/>
        <div className="background" style={divStyle}>
          <h1 className="splash-header">{saying}</h1>
          <div className="splash-listings">
          <div className="featured clearfix">
            <div id="ny" onClick={this.goToDC}><h2>Washington, DC</h2><img src="http://res.cloudinary.com/dfjm0djds/image/upload/v1469031215/dcbutton_x7flfi.jpg" alt="DC" /></div>
            <div id="dc" onClick={this.goToNY}><h2>New York, NY</h2><img src="http://res.cloudinary.com/dfjm0djds/image/upload/v1469031215/newyorkbutton_eyftpa.jpg" alt="NY" /></div>
          </div>
          </div>
        </div>

      </div>
    );
  }
});

module.exports = Splash;
