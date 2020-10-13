class AddIndexToNameUsers < ActiveRecord::Migration[5.2]
  def change
    add_index :users, :fullname
  end
end
