class RemovePictureColumnFromBurgers < ActiveRecord::Migration[5.2]
  def change
    remove_column :burgers, :picture
  end
end