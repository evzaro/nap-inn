var React = require('react');
var PropTypes = React.PropTypes;
var Search = require('./search');
var MySpotItem = require('./my_spot_item');
var NapSpotApiUtil = require('../util/nap_spot_api_util');
var NapSpotStore = require('../stores/nap_spot_store');

var Splash = React.createClass({

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
            <div id="ny"><h2>Washington, DC</h2><img src="http://res.cloudinary.com/dfjm0djds/image/upload/v1469031215/dcbutton_x7flfi.jpg" alt="DC" /></div>
            <div id="dc"><h2>New York</h2><img src="http://res.cloudinary.com/dfjm0djds/image/upload/v1469031215/newyorkbutton_eyftpa.jpg" alt="NY" /></div>
          </div>
          </div>
        </div>

      </div>
    );
  }
});

module.exports = Splash;
