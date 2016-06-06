var React = require('react');
var ClientActions = require('../../actions/client_actions');


CategoryForm = React.createClass({

  render: function(){

    return(
      <div className="creation-options">
      <h2>What kind of spot are you listing?</h2>
      <form className="category-form">
        <div className="radio-option clearfix top-radio">
        <label for="Air Mattress">Air Mattress
        <input type="radio" name="category" value="Air Mattress" id="Air Mattress"/>
        </label>
        </div>
        <div className="radio-option clearfix">
        <label for="Bed">Bed
        <input type="radio" name="category" value="Bed" id="Bed"/>
        </label>
        </div>
        <div className="radio-option clearfix">
        <label for="Couch">Couch
        <input type="radio" name="category" value="Couch" id="Couch"/>
        </label>
        </div>
        <div className="radio-option clearfix">
        <label for="Futon">Futon
        <input type="radio" name="category" value="Futon" id="Futon"/>
        </label>
        </div>
        <div className="radio-option clearfix">
        <label for="Hammock">Hammock
        <input type="radio" name="category" value="Hammock" id="Hammock"/>
        </label>
        </div>
        <div className="radio-option clearfix">
        <label for="Recliner">Recliner
        <input type="radio" name="category" value="Recliner" id="Recliner"/>
        </label>
        </div>
        <div className="radio-option clearfix">
        <label for="Yoga Mat">Yoga Mat
        <input type="radio" name="category" value="Yoga Mat" id="Yoga Mat"/>
        </label>
        </div>
        <div className="radio-option clearfix bottom-radio">
        <label for="Other">Other
        <input type="radio" name="category" value="Other" id="Other"/>
        </label>
        </div>

      </form>
      </div>
    );
  }


});


module.exports = CategoryForm;
