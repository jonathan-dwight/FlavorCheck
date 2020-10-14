class CreateBurgers < ActiveRecord::Migration[5.2]
  def change
    create_table :burgers do |t|
      t.string :name, null: false
      t.integer :rating, null: false
      t.text :description
      t.string :picture
      t.integer :restaurant_id, null: false
      t.integer :author_id, null: false

      t.timestamps
    end

    add_index :burgers, :author_id
    add_index :burgers, :restaurant_id
  end
end
