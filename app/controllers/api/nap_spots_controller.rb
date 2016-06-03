class Api::NapSpotsController < ApplicationController

  def index
    @nap_spots = NapSpot.all
    render json: @nap_spots
  end

  def create
    @nap_spot = NapSpot.new(nap_spot_params)

    if @nap_spot.save
      render json: @nap_spot
    else
      render json: @nap_spot.errors, status: 422
    end
  end

  def show
  end

  def nap_spot_params
    params.require(:nap_spot).permit(:title, :description, :category, :location, :price, :image_urls)
  end

end