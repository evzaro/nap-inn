var React = require('react');
var SessionActions = require('../actions/session_actions');
var SessionStore = require('../stores/session_store');
var ClientActions = require('../actions/client_actions');
var RouteActions = require('../actions/route_actions');
var ReactRouter = require('react-router');
var hashHistory = ReactRouter.hashHistory;
var LocationForm = require('./spot_forms/0-location');
var CategoryForm = require('./spot_forms/3-category');
var DetailForm = require('./spot_forms/4-detail');
var InfoForm = require('./spot_forms/5-info');

var MasterSpotForm = React.createClass({
  // add saving? new table? or take away null constraints?
  getInitialState: function(){
    return({

    progress: 0,
    title: "",
    description: "",
    category: "",
    location: "",
    price: 0,
    capacity: 1,
    image_urls: "",
    lat: 0,
    lng: 0
    });
  },

  handleClickNext: function(){
    this.setState(function(previousState, currentProps) {
      return {progress: previousState.progress + 1};
    });
  },

  componentDidMount: function() {
    RouteActions.changeRoute('new');
  },

  handleClickSave: function(){
    //category has extra info being unused

    ClientActions.createNapSpot({
      title: this.state.title,
      description: this.state.description,
      category: this.state.category.category,
      location: JSON.stringify(this.state.location),
      price: this.state.price,
      capacity: this.state.capacity,
      image_urls: this.state.image_urls,
      lat: this.state.lat,
      lng: this.state.lng,
    });
    hashHistory.push('/mynapspots');
  },

  handleClickPrev: function(){
    this.setState(function(previousState, currentProps) {
      if (previousState.progress > 0) {
        return {progress: previousState.progress - 1};
      }
    });
  },

  getLocationFromChild: function (data) {
    var new_state = {
      location: data,
      lat: data.lat,
      lng: data.lng,
    };
    this.setState(new_state);
  },

  getCategoryFromChild: function (data) {
    var new_state = {
      category: data
    };
    this.setState(new_state);
  },

  getDetailsFromChild: function (data) {
    var new_state = {
      price: data.price,
      capacity: data.capacity
    };
    this.setState(new_state);
  },

  getInfoFromChild: function (data) {
    var new_state = {
      title: data.title,
      description: data.description,
      image_urls: data.image_url
    };
    this.setState(new_state);
  },

  handleLocationClick: function (){
    if (this.state.progress > 2){
      this.setState({
        progress: 0
      });
    }
  },

  handleTypeClick: function (){
    if (this.state.progress !== 3){
      this.setState({
        progress: 3
      });
    }
  },

  handleDetailsClick: function (){
    if (this.state.progress < 4){
      this.setState({
        progress: 4
      });
    }
  },

  render: function(){
    var help;
    var back;
    if (this.state.progress > 0){
      back = <button className="back-btn"
        onClick={this.handleClickPrev}>← Back</button>;
    } else {
      back = "";
    }


    if (this.state.progress < 3){
      help = <img src={JSON.parse(
      document.getElementById('content').dataset.images).help}/>;
    } else if (this.state.progress < 5) {
      help = <img src={JSON.parse(
      document.getElementById('content').dataset.images).sleep}/>;
    } else {
      help = <img id="sample_upload" src={this.state.image_urls}/>;
    }

    var currentForm;
    var nextButton;
    var progressStatus;

    if (this.state.progress < 3){
      progressStatus = "first";
      nextButton = <button className="next-btn" onClick={this.handleClickNext}>Next</button>;
      currentForm = <LocationForm progress={this.state.progress} sendValueToMaster={this.getLocationFromChild}/>;
    } else if (this.state.progress === 3){
      progressStatus = "second";
      nextButton = <button className="next-btn" onClick={this.handleClickNext}>Next</button>;
      currentForm = <CategoryForm progress={this.state.progress} sendValueToMaster={this.getCategoryFromChild}/>;
    } else if (this.state.progress === 4){
      progressStatus = "third";
      nextButton = <button className="next-btn" onClick={this.handleClickNext}>Next</button>;
      currentForm = <DetailForm progress={this.state.progress} sendValueToMaster={this.getDetailsFromChild}/>;
    } else if (this.state.progress === 5){
      progressStatus = "third";
      nextButton = <button className="next-btn" onClick={this.handleClickSave}>Save</button>;
      currentForm = <InfoForm progress={this.state.progress} sendValueToMaster={this.getInfoFromChild}/>;
    }
    return(
      <div className="form-content">
        <nav className="form-navbar">
          <ul className="form-nav-list clearfix">
            <li><div className={"loc-" + progressStatus} onClick={this.handleLocationClick}>Location</div></li>
            <li><div className={"type-" + progressStatus}  onClick={this.handleTypeClick}>Spot Type</div></li>
            <li><div className={"detail-" + progressStatus}  onClick={this.handleDetailsClick}>Details</div></li>
          </ul>
        </nav>
        <div className = "centered-content clearfix">
          <div className="mini-form-window clearfix">

            {currentForm}

            <div className="form-nav-bottom">
              <div className="bottom-nav-buttons-container">
                {back}

                  {nextButton}
              </div>
            </div>
          </div>
            <div className="helper-info">
              <div className="helper-content">
                {help}
              </div>
            </div>
        </div>
      </div>
    );
  }



});

module.exports = MasterSpotForm;
