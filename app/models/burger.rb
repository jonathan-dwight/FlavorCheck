# == Schema Information
#
# Table name: burgers
#
#  id            :bigint           not null, primary key
#  name          :string           not null
#  rating        :integer          not null
#  description   :text
#  restaurant_id :integer          not null
#  author_id     :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#
class Burger < ApplicationRecord
    validates :name, presence: true
    validates :rating, inclusion: {in: [1, 2, 3, 4, 5], message: "must be between 1-5"}
    # validates :restaurant_id, presence: { message: "must be selected"} - will render two messages

    has_one_attached :photo

    belongs_to :restaurant,
        primary_key: :id,
        foreign_key: :restaurant_id,
        class_name: :Restaurant

    belongs_to :author,
        primary_key: :id,
        foreign_key: :author_id,
        class_name: :User


end
