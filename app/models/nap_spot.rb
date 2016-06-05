class NapSpot < ActiveRecord::Base
  validates :title, :description, :owner_id, :category, :location, :price, :capacity, presence: true


end
