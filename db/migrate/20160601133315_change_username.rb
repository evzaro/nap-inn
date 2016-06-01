class ChangeUsername < ActiveRecord::Migration
  def change
    rename_column :users, :username,  :user_email
  end
end
