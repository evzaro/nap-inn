var React = require('react');

InfoForm = React.createClass({

  getInitialState: function (){
    return(
      {
        title: "",
        description: "",
      }
    );
  },

  handleTitleChange: function (e){
    this.setState({
      title: e.target.value
    });
    this.forceUpdate(this.updateMaster);
  },

  handleDescriptionChange: function (e){
    this.setState({
      description: e.target.value
    });
    this.forceUpdate(this.updateMaster);
  },

  updateMaster: function(){
    this.props.sendValueToMaster(this.state);
  },

  render: function(){

    return(
      <div className="creation-options detail-form-container">
        <h2>How many people can comfortably nap at your spot?</h2>
        <input type="text" value={this.state.title}
          onChange={this.handleTitleChange}/>

        <h2>How much would you like to charge per hour?</h2>
        <input type="textarea" value={this.state.description}
          onChange={this.handleDescriptionChange}/>

      </div>
    );
  }
});


module.exports = InfoForm;
