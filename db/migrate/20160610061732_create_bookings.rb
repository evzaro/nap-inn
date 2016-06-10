class CreateBookings < ActiveRecord::Migration
  def change
    create_table :bookings do |t|
      t.integer :napspot_id
      t.integer :napper_id
      t.string :date
      t.string :reserved_blocks
    end
    add_index :bookings, :napspot_id
    add_index :bookings, :napper_id
  end
end
