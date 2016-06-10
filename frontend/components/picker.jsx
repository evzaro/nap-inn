var React = require('react');
var DatePicker = require('react-datepicker');
var moment = require('moment');

var Picker = React.createClass({


  getInitialState: function() {
    return {
      startDate: moment()
    };
  },

  handleChange: function(date) {
    this.setState({
      startDate: date
    });
  },

  render: function() {
    return <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange} />;
  }
});

module.exports = Picker;
