var React = require('react');

DetailForm = React.createClass({

  getInitialState: function (){
    return(
      {
        capacity: 1,
        price: 0.00,
      }
    );
  },

  handleCapacityChange: function (e){
    this.setState({
      capacity: e.target.value
    }, this.updateMaster);
  },

  handlePriceChange: function (e){
    this.setState({
      price: e.target.value
    }, this.updateMaster);
  },

  updateMaster: function(){
    this.props.sendValueToMaster(this.state);
  },

  render: function(){

    return(
      <div className="creation-options detail-form-container">
        <h2>How many people can comfortably nap at your spot?</h2>
        <input type="number" min="1" value={this.state.capacity}
          onChange={this.handleCapacityChange}/>

        <h2>How much would you like to charge per hour?</h2>
        <input type="number" step="0.01" min="0.00" value={this.state.price}
          onChange={this.handlePriceChange}/>

      </div>
    );
  }
});


module.exports = DetailForm;
