class Api::BookingsController < ApplicationController

  def index
    @bookings = NapSpot.find_by(id: params[:napspot_id]).bookings

     render json: @bookings

  end

  def user_index
    @bookings = Booking.find_by(napper_id: params[:napper_id])

     render json: @bookings

  end

  def create
    @booking = Booking.new(booking_params)
    @booking.napper_id = current_user.id

    if @booking.save
      render json: @booking
    else
      render json: @booking.errors, status: 422
    end
  end

  def show
    @booking = Booking.find_by(id: params[:id])
    render json: @booking
  end

  def booking_params
    params.require(:booking).permit(:reserved_blocks, :date, :napspot_id)
  end

end
