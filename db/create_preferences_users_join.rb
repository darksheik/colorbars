class CreateUsersPreferencesJoinTable < ActiveRecord::Migration
  def change
    create_table :preferences_users, :id => false do |t|
      t.integer :preference_id
      t.integer :user_id
      t.string :preference_setting
    end
  end
end
