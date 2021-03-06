var React = require('react');
var NapSpotStore = require('../stores/nap_spot_store');
var BookingsStore = require('../stores/bookings_store');
var ClientActions = require('../actions/client_actions');
var NapSpotApiUtil = require('../util/nap_spot_api_util');
var BookingApiUtil = require('../util/booking_api_util');
var RouteActions = require('../actions/route_actions');
var Picker = require('./picker');
var moment = require('moment');

var SpotDetail = React.createClass({
  getInitialState: function() {
    return({
      spot: NapSpotStore.currentSpot(),
      date: moment().format('MMMM Do YYYY'),
      reserved_blocks: "",
      bookings: BookingsStore.all()
    });
  },

  componentDidMount: function() {
    RouteActions.changeRoute('detail');
    NapSpotApiUtil.fetchNapSpot(this.props.params.id);
    BookingApiUtil.fetchBookings(this.props.params.id);
    this.storeListener = NapSpotStore.addListener(this.handleChange);
    this.bookListener = BookingsStore.addListener(this.handleBookChange);
  },

  componentWillUnmount: function() {
    this.storeListener.remove();
    this.bookListener.remove();
  },

  handleBook: function (e){
    e.preventDefault();

    ClientActions.createBooking({
      napspot_id: this.state.spot.id,
      date: this.state.date,
      reserved_blocks: this.state.reserved_blocks,
    });
    this.forceUpdate();
  },

  handleChange: function() {
    this.setState(
      {spot: NapSpotStore.currentSpot()}
    );
  },

  handleBookChange: function(){
    this.setState(
      {bookings: BookingsStore.all()}
    );
  },

  getDateFromChild: function (new_date) {
    this.setState({date: new_date});
  },

  handleBlocks: function (e){
    var options = e.target.options;
    var value = [];
    for (var i = 0, l = options.length; i < l; i++) {
      if (options[i].selected) {
      value.push(options[i].value);
      }
    }
    this.setState(
      {reserved_blocks: String(value)}
    );
  },

  render: function() {

    for (var i = 1; i < 25; i++) {

      $("#timeSelect option[value=" + i + "]")
        .removeAttr("disabled");
    }

    var bookings = this.state.bookings;
    if (bookings.length > 0){
      bookings.forEach(function(booking){
        if (booking.date === this.state.date){
          var blocks = booking.reserved_blocks.split(",");
          for (var i = 0; i < blocks.length; i++) {
            $("#timeSelect option[value=" + blocks[i]+ "]")
              .attr("disabled", "disabled");

          }
        }
      }.bind(this));
    }

    var city = "";
    var state = "";
    var country = "";
    var location;

    if (this.state.spot.location){
      location = JSON.parse(this.state.spot.location);
      city = location.locality;
      state = location.administrative_area_level_1;
      country = location.country;
    }


    if (this.state.spot.image_urls){
      var divStyle = {
        backgroundImage: 'url(' + this.state.spot.image_urls + ')'
      };
    }

    var categoryIcon;
    if (this.state.spot.category === "Hammock"){
      categoryIcon = <img src={JSON.parse(
        document.getElementById('content').dataset.images).hammock}/>;
    } else {
      categoryIcon = <img src={JSON.parse(
        document.getElementById('content').dataset.images).bed}/>;
    }
    var capacityIcon = <img src={JSON.parse(
      document.getElementById('content').dataset.images).capacity}/>;

    return (
      <div className="detail">

        <div className="cover-img" style={divStyle}></div>
        <div className="summary">
        <div className="info-and-booking">

          <h2>{this.state.spot.title}</h2>

          <span className="location">
            <h3>{city + ", " + state + ", " + country}</h3>
          </span>

          <div className="detail-icons">
            <div className="category-icon">{categoryIcon}<h3>{this.state.spot.category}</h3></div>

            <div className="capacity-icon">{capacityIcon}<h3>{this.state.spot.capacity + ' Nappers'}</h3></div>

          </div>

          <div className="booking-content">
            <span className="price-wrapper"><h3>{'$' + this.state.spot.price}</h3></span>
            <Picker sendToParent={this.getDateFromChild}/>
            <div className="time-select-container">

              <select id="timeSelect" multiple={true} onChange={this.handleBlocks}>
                <option id="1" value="1">Midnight - 1:00am</option>
                <option id="2" value="2">1:00am - 2:00am</option>
                <option id="3" value="3">2:00am - 3:00am</option>
                <option id="4" value="4">3:00am - 4:00am</option>
                <option id="5" value="5">4:00am - 5:00am</option>
                <option id="6" value="6">5:00am - 6:00am</option>
                <option id="7" value="7">6:00am - 7:00am</option>
                <option id="8" value="8">7:00am - 8:00am</option>
                <option id="9" value="9">8:00am - 9:00am</option>
                <option id="10" value="10">9:00am - 10:00am</option>
                <option id="11" value="11">10:00am - 11:00am</option>
                <option id="12" value="12">11:00am - Noon</option>
                <option id="13" value="13">Noon - 1:00pm</option>
                <option id="14" value="14">1:00pm - 2:00pm</option>
                <option id="15" value="15">2:00pm - 3:00pm</option>
                <option id="16" value="16">3:00pm - 4:00pm</option>
                <option id="17" value="17">4:00pm - 5:00pm</option>
                <option id="18" value="18">5:00pm - 6:00pm</option>
                <option id="19" value="19">6:00pm - 7:00pm</option>
                <option id="20" value="20">7:00pm - 8:00pm</option>
                <option id="21" value="21">8:00pm - 9:00pm</option>
                <option id="22" value="22">9:00pm - 10:00pm</option>
                <option id="23" value="23">10:00pm - 11:00pm</option>
                <option id="24" value="24">11:00pm - Midnight</option>
              </select>
            </div>

            <button onClick={this.handleBook}>Book a Nap</button>
          </div>
        </div>
          <div className="description">
            <div className="desc-items">
              <h3>About this spot:</h3>
              <p>{this.state.spot.description}</p>
            </div>
          </div>

        </div>
      </div>
    );
  }
});

module.exports = SpotDetail;
