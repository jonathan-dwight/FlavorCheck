# == Schema Information
#
# Table name: restaurants
#
#  id         :bigint           not null, primary key
#  name       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Restaurant < ApplicationRecord
    validates :name, presence: true

    has_many :burgers,
        primary_key: :id,
        foreign_key: :restaurant_id,
        class_name: :Burger
end
