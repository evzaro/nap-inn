var React = require('react');
var NavBar = require('./navbar');
var Search = require('./search');
var Splash = require('./splash');


var App = React.createClass({

  render: function(){
    return(
      <main>
        <NavBar/>
    
        {this.props.children}
      </main>
    );
  }
});


module.exports = App;
