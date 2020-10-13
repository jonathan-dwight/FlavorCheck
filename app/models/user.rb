# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  fname           :string           not null
#  lname           :string           not null
#  email           :string           not null
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
    validates :username, :session_token, presence: true, uniqueness: true
    validates :fullname, :email, presence: true
    validates :password_digest, presence: true
    validates :password, length: { minimum: 6 }, allow_nil: true

    after_initialize :ensure_session_token
    attr_reader :password


    def self.generate_session_token
        SecureRandom::urlsafe_base64
    end

    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        user && user.is_password?(password) ? user : nil
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token!
        self.session_token = User.generate_session_token
        self.save!
        self.session_token
    end


    # def custom_errors
    #     user.errors.add(:fullname, "Name can't be blank!")
    #     user.errors.add(:username, "Username can't be blank!")
    #     user.errors.add(:email, "Email can't be blank!")
    #     user.errors.add(:password, "Password - mimiumum 6 characters")
    # end

    private
    
    def ensure_session_token
        self.session_token ||= User.generate_session_token
    end
end
