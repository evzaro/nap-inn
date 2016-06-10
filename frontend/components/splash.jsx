var React = require('react');
var PropTypes = React.PropTypes;
var Search = require('./search');

var Splash = React.createClass({




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
      backgroundImage: "url('http://res.cloudinary.com/dfjm0djds/image/upload/v1465393667/jc8knkzdobgn3zq7f0eh.jpg')"
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
