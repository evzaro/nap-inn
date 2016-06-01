var React = require('react');
var SessionActions = require('../actions/session_actions');
var SessionStore = require('../stores/session_store');

var LoginForm = React.createClass({
  getInitialState: function () {
    return {
      username: "",
      password: ""
    };
  },

  onChangeUserField: function (e){
    this.setState({
      username: e.target.value
    });
  },

  onChangePassField: function (e){
    this.setState({
      password: e.target.value
    });
  },

  handleSubmit: function (e){
    e.preventDefault();

		var formData = {
			username: this.state.username,
			password: this.state.password
		};

    if (this.props.location.pathname === "/login") {
      SessionApiUtil.login(formData);
    }
  },

  render: function (){
    return(
      <div className="login-form-div">
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.username}
            id="username" onChange={this.onChangeUserField} />
          <input type="password" value={this.state.password}
            id="password" onChange={this.onChangePassField} />
          <input type="submit" value="Log In"/>
        </form>
      </div>
    );
  }

});

module.exports = LoginForm;
