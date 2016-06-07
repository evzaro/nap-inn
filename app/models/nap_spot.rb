class NapSpot < ActiveRecord::Base
  validates :title, :description, :owner_id, :category, :location, :price, :capacity, presence: true

  belongs_to(
    :owner,
    primary_key: :id,
    foreign_key: :owner_id,
    class_name: 'User'
  )

end
