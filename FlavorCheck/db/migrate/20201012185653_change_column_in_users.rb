class ChangeColumnInUsers < ActiveRecord::Migration[5.2]
  def change
    rename_column :users, :fname, :fullname
    remove_column :users, :lname
  end
end
