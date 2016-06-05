class AddName < ActiveRecord::Migration
  def change
    add_column :users, :fname, :string
    add_column :users, :lname, :string
    add_column :nap_spots, :capacity, :integer
  end
end
