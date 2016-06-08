var React = require('react');
var PropTypes = React.PropTypes;
var Search = require('./search');

var Splash = React.createClass({

  render: function() {
    return (
      <div>
        <Search/>
        <div className="background">
        <img src="http://res.cloudinary.com/dfjm0djds/image/upload/v1465393667/jc8knkzdobgn3zq7f0eh.jpg"/>
      </div>
    </div>
    );
  }

});

module.exports = Splash;
