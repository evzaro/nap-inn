var React = require('react');
var SessionStore = require('../../stores/session_store');

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
    var titlePlaceHolder;


    return(
      <div className="creation-options show-form-container">
        <h2>Name your spot</h2>
        <input type="text" value={this.state.title}
          onChange={this.handleTitleChange} placeholder={"e.g "+ SessionStore.currentUser().fname + "'s spot!"}/>

        <h3 className="desc-label">Write a brief description about your spot. What makes it special?</h3>
        <textarea className="description-input" value={this.state.description}
          onChange={this.handleDescriptionChange} placeholder="Description"/>

      </div>
    );
  }
});


module.exports = InfoForm;
