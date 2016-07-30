class Api::BookingsController < ApplicationController

  def index
    @bookings = NapSpot.find_by(id: params[:napspot_id]).bookings

     render json: @bookings

  end

  def user_index
    @bookings = Booking.where(napper_id: current_user.id).includes(:napspot)
    @bookings = @bookings.map do |booking|
      time = []
      booking.reserved_blocks.split(",").each do |block|
        case block
          when "1"
             time << "Midnight - 1:00am"
          when "2"
             time << "1:00am - 2:00am"
          when "3"
             time << "2:00am - 3:00am"
          when "4"
             time << "3:00am - 4:00am"
          when "5"
             time << "4:00am - 5:00am"
          when "6"
             time << "5:00am - 6:00am"
          when "7"
             time << "6:00am - 7:00am"
          when "8"
             time << "7:00am - 8:00am"
          when "9"
             time << "8:00am - 9:00am"
          when "10"
             time << "9:00am - 10:00am"
          when "11"
             time << "10:00am - 11:00am"
          when "12"
             time << "11:00am - Noon"
          when "13"
             time << "Noon - 1:00pm"
          when "14"
             time << "1:00pm - 2:00pm"
          when "15"
             time << "2:00pm - 3:00pm"
          when "16"
             time << "3:00pm - 4:00pm"
          when "17"
             time << "4:00pm - 5:00pm"
          when "18"
             time << "5:00pm - 6:00pm"
          when "19"
             time << "6:00pm - 7:00pm"
          when "20"
             time << "7:00pm - 8:00pm"
          when "21"
             time << "8:00pm - 9:00pm"
          when "22"
             time << "9:00pm - 10:00pm"
          when "23"
             time << "10:00pm - 11:00pm"
          when "24"
             time << "11:00pm - Midnight"
        end
      end
      booking.reserved_blocks = time
      booking
    end

     render "api/bookings/my_bookings"
    # render json: @bookings

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

  def destroy
    @booking = Booking.find_by(id: params[:id])
    @booking.destroy
    render json: @booking
  end

  def booking_params
    params.require(:booking).permit(:reserved_blocks, :date, :napspot_id)
  end

end
