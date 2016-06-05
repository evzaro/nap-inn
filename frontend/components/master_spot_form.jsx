var React = require('react');
var SessionActions = require('../actions/session_actions');
var SessionStore = require('../stores/session_store');
var ClientActions = require('../actions/client_actions');
var ReactRouter = require('react-router');
var hashHistory = ReactRouter.hashHistory;
var LocationForm = require('./spot_forms/0-location');

var MasterSpotForm = React.createClass({
  // add saving? new table? or take away null constraints?
  getInitialState: function(){
    return({

    progress: 0,
    title: "",
    description: "",
    category: "",
    location: {},
    price: "",
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
      console.log(currentProps);
      if (previousState.progress > 0) {
        return {progress: previousState.progress - 1};
      }
    });
  },

  render: function(){

    return(
      <div className="form-content">
        <nav className="form-navbar">
          <ul className="form-nav-list clearfix">
            <li><div>Location</div></li>
            <li><div>Place Type</div></li>
            <li><div>Details</div></li>
          </ul>
        </nav>
        <div className = "centered-content clearfix">
          <div className="mini-form-window clearfix">

            <LocationForm progress={this.state.progress}/>

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
