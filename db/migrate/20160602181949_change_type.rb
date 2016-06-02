class ChangeType < ActiveRecord::Migration
  def change
    rename_column :nap_spots, :type, :category
  end
end
