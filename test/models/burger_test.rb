# == Schema Information
#
# Table name: burgers
#
#  id            :bigint           not null, primary key
#  name          :string           not null
#  rating        :integer          not null
#  description   :text
#  picture       :string
#  restaurant_id :integer          not null
#  author_id     :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#
require 'test_helper'

class BurgerTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end