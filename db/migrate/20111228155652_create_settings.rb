class CreateSettings < ActiveRecord::Migration
  def change
    create_table :settings do |t|
      t.integer :user_id
      t.integer :preference_id
      t.String :value

      t.timestamps
    end
  end
end
