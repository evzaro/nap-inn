var React = require('react');
var NavBar = require('./navbar');


var App = React.createClass({
  render: function(){
    return(
      <div>
        <NavBar/>
          <div className="background">
          </div>
        {this.props.children}
      </div>
    );
  }
});


module.exports = App;
