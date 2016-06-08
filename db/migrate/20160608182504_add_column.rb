class AddColumn < ActiveRecord::Migration
  def change
    add_column :users, :image_url, :string
    add_column :nap_spots, :lat, :float
    add_column :nap_spots, :lng, :float
  end
end
