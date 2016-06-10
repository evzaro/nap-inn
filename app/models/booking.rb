class Booking < ActiveRecord::Base

  	validates :napspot_id, :napper_id, :date, :reserved_blocks, presence: true

    belongs_to(
      :napper,
      primary_key: :id,
      foreign_key: :napper_id,
      class_name: 'User'
    )

    belongs_to(
      :napspot,
      primary_key: :id,
      foreign_key: :napspot_id,
      class_name: 'NapSpot'
    )

end
