class StaticPagesController < ApplicationController
  def root
    get_image_paths
  end

  def get_image_paths
  @images = {
    wlogo: path_to_asset('napinn-logo-white.png'),
    blogo: path_to_asset('napinn-logo-black.png'),
  }
end

private

  def path_to_asset(asset)
    ApplicationController.helpers.asset_path(asset)
  end
end
