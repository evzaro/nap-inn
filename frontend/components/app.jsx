var React = require('react');
var NavBar = require('./navbar');


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
