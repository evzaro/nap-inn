class CreateNapSpots < ActiveRecord::Migration
  def change
    create_table :nap_spots do |t|
      t.string :title, null: false
      t.text :description, null: false
      t.integer :owner_id, null: false
      t.string :type, null: false
      t.string :location, null: false
      t.integer :price, null: false
      t.string :image_urls
    end
    add_index :nap_spots, :owner_id
    add_index :nap_spots, :type
    add_index :nap_spots, :location
    add_index :nap_spots, :price
  end
end
