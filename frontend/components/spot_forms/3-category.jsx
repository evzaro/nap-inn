var React = require('react');

CategoryForm = React.createClass({

  getInitialState: function (){
    return(
      {
        category: "",
        house_type: "",
      }
    );
  },

  handleCategoricalChange: function (e){

    this.setState({
      category: e.target.value
    }, this.updateMaster);
  },

  handleTypalChange: function (e){

    this.setState({
      house_type: e.target.value
    }, this.updateMaster);
  },

  updateMaster: function(){
    this.props.sendValueToMaster(this.state);
  },

  render: function(){

    return(
      <div className="creation-options category-form-container">
      <h2>What kind of spot are you listing?</h2>
      <form className="category-form" onChange={this.handleCategoricalChange}>
        <div className="radio-option clearfix top-radio">
          <label htmlFor="Air Mattress">Air Mattress
            <input type="radio" name="category" value="Air Mattress" id="Air Mattress"/>
          </label>
        </div>
        <div className="radio-option clearfix">
          <label htmlFor="Bed">Bed
            <input type="radio" name="category" value="Bed" id="Bed"/>
          </label>
        </div>
        <div className="radio-option clearfix">
          <label htmlFor="Couch">Couch
            <input type="radio" name="category" value="Couch" id="Couch"/>
          </label>
        </div>
        <div className="radio-option clearfix">
          <label htmlFor="Futon">Futon
            <input type="radio" name="category" value="Futon" id="Futon"/>
          </label>
        </div>
        <div className="radio-option clearfix">
          <label htmlFor="Hammock">Hammock
            <input type="radio" name="category" value="Hammock" id="Hammock"/>
          </label>
        </div>
        <div className="radio-option clearfix">
          <label htmlFor="Recliner">Recliner
            <input type="radio" name="category" value="Recliner" id="Recliner"/>
          </label>
        </div>
        <div className="radio-option clearfix">
          <label htmlFor="Yoga Mat">Yoga Mat
            <input type="radio" name="category" value="Yoga Mat" id="Yoga Mat"/>
          </label>
        </div>
        <div className="radio-option clearfix bottom-radio">
          <label htmlFor="Other">Other
            <input type="radio" name="category" value="Other" id="Other"/>
          </label>
        </div>
      </form>
      <label className="house-select-label">What kind of property is it in?
      <select id="house-type" name="house_type" className="house-select" onChange={this.handleTypalChange}>
        <option value="1">Apartment</option>
        <option value="2">House</option>
        <option value="3">Bed &amp; Breakfast</option>
        <option value="35">Loft</option>
        <option value="36">Townhouse</option>
        <option value="37">Condominium</option>
        <option value="38">Bungalow</option>
        <option value="4">Cabin</option>
        <option value="11">Villa</option>
        <option value="5">Castle</option>
        <option value="9">Dorm</option>
        <option value="6">Treehouse</option>
        <option value="8">Boat</option>
        <option value="28">Plane</option>
        <option value="32">Camper/RV</option>
        <option value="12">Igloo</option>
        <option value="10">Lighthouse</option>
        <option value="15">Yurt</option>
        <option value="16">Tipi</option>
        <option value="18">Cave</option>
        <option value="19">Island</option>
        <option value="22">Chalet</option>
        <option value="23">Earth House</option>
        <option value="24">Hut</option>
        <option value="25">Train</option>
        <option value="34">Tent</option>
        <option value="33">Other</option>
      </select>
      </label>
      </div>
    );
  }
});

module.exports = CategoryForm;
