var React = require('react');
var SessionActions = require('../actions/session_actions');
var SessionStore = require('../stores/session_store');
var ClientActions = require('../actions/client_actions');
var ReactRouter = require('react-router');
var hashHistory = ReactRouter.hashHistory;
var LocationForm = require('./spot_forms/0-location');
var CategoryForm = require('./spot_forms/3-category');
var DetailForm =  require('./spot_forms/4-detail');
var InfoForm =  require('./spot_forms/5-info');

var MasterSpotForm = React.createClass({
  // add saving? new table? or take away null constraints?
  getInitialState: function(){
    return({

    progress: 0,
    title: "",
    description: "",
    category: {},
    location: {},
    price: 0,
    capacity: 1,
    image_urls: ""
    });
  },

  handleClickNext: function(){
    this.setState(function(previousState, currentProps) {
      return {progress: previousState.progress + 1};
    });
  },

  handleClickPrev: function(){
    this.setState(function(previousState, currentProps) {
      if (previousState.progress > 0) {
        return {progress: previousState.progress - 1};
      }
    });
  },

  getLocationFromChild: function (data) {
    var new_state = {location: data};
    this.setState(new_state);
  },

  getCategoryFromChild: function (data) {
    var new_state = {category: data};
    this.setState(new_state);
  },

  getDetailsFromChild: function (data) {
    var new_state = {price: data.price, capacity: data.capacity};
    this.setState(new_state);
  },

  render: function(){
    console.log(this.state.price);
    console.log(this.state.capacity);
    var currentForm;
    if (this.state.progress < 3){
      currentForm = <LocationForm progress={this.state.progress} sendValueToMaster={this.getLocationFromChild}/>;
    } else if (this.state.progress === 3){
      currentForm = <CategoryForm progress={this.state.progress} sendValueToMaster={this.getCategoryFromChild}/>;
    } else if (this.state.progress === 4){
      currentForm = <DetailForm progress={this.state.progress} sendValueToMaster={this.getDetailsFromChild}/>;
    } else if (this.state.progress === 5){
    }
    return(
      <div className="form-content">
        <nav className="form-navbar">
          <ul className="form-nav-list clearfix">
            <li><div>Location</div></li>
            <li><div>Spot Type</div></li>
            <li><div>Details</div></li>
          </ul>
        </nav>
        <div className = "centered-content clearfix">
          <div className="mini-form-window clearfix">

            {currentForm}

            <div className="form-nav-bottom">
              <div className="bottom-nav-buttons-container">
                <button className="back-btn"
                  onClick={this.handleClickPrev}>← Back</button>

                <button className="next-btn"
                  onClick={this.handleClickNext}>Next</button>
              </div>
            </div>
          </div>
            <div className="helper-info"><div className="helper-content"></div></div>
        </div>
      </div>
    );
  }



});

module.exports = MasterSpotForm;
