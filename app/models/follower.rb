# == Schema Information
#
# Table name: followers
#
#  id          :bigint           not null, primary key
#  follower_id :integer          not null
#  followee_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Follower < ApplicationRecord

    belongs_to :follower,
        primary_key: :id,
        foreign_key: :follower_id,
        class_name: :User

    belongs_to :followee,
        primary_key: :id,
        foreign_key: :followee_id,
        class_name: :User

end
