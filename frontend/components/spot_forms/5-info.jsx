var React = require('react');
var SessionStore = require('../../stores/session_store');
var UploadButton = require('./upload_button');

InfoForm = React.createClass({

  getInitialState: function (){
    return(
      {
        title: "",
        description: "",
        image_url: "",
      }
    );
  },

  handleTitleChange: function (e){
    this.setState({
      title: e.target.value
    }, this.updateMaster);
  },

  handleDescriptionChange: function (e){
    this.setState({
      description: e.target.value
    }, this.updateMaster);
  },

  handleUpload: function (url){
    this.setState({
      image_url: url
    }, this.updateMaster);
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
          onChange={this.handleTitleChange} placeholder={"e.g. "+ SessionStore.currentUser().fname + "'s spot!"}/>

        <h3 className="desc-label">Write a brief description about your spot. What makes it special?</h3>
        <textarea className="description-input" value={this.state.description}
          onChange={this.handleDescriptionChange} placeholder="Description"/>

        <h3 className="desc-label">Upload a photo of your spot!</h3>
        <UploadButton sendImageToParent={this.handleUpload}/>
      </div>
    );
  }
});


module.exports = InfoForm;
