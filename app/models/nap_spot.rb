class NapSpot < ActiveRecord::Base
  validates :title, :description, :owner_id, :category, :location, :price, presence: true


end
