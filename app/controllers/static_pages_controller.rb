class StaticPagesController < ApplicationController
  def root
    get_image_paths
  end

  def get_image_paths
  @images = {
    logo: path_to_asset('napinn-logo-white.png'),
    background1: path_to_asset('hotel_room.jpeg'),
  }
end

private

  def path_to_asset(asset)
    ApplicationController.helpers.asset_path(asset)
  end
end
