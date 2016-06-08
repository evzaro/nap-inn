class NapSpot < ActiveRecord::Base
  validates :title, :description, :owner_id, :category, :location, :price, :capacity, presence: true

  belongs_to(
    :owner,
    primary_key: :id,
    foreign_key: :owner_id,
    class_name: 'User'
  )

  def self.in_bounds(bounds)
    NapSpot.all.
      where("lat >= #{bounds['southWest']['lat']} AND lat <= #{bounds['northEast']['lat']}").
      where("lng >= #{bounds['southWest']['lng']} AND lng <= #{bounds['northEast']['lng']}")
  end

end
