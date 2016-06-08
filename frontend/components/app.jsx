var React = require('react');
var NavBar = require('./navbar');
var Search = require('./search');


var App = React.createClass({
  render: function(){
    return(
      <main>
        <NavBar/>
        <div className="background">
          <img src="https://res.cloudinary.com/dfjm0djds/image/upload/v1465350312/jc8knkzdobgn3zq7f0eh.jpg"/>
        </div>
        {this.props.children}
      </main>
    );
  }
});


module.exports = App;
