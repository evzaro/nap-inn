class User < ActiveRecord::Base

  	validates :user_email, :password_digest, :fname, :lname, :session_token, presence: true
  	validates :user_email, uniqueness: true
  	validates :password, length: {minimum: 6, allow_nil: true}

  	after_initialize :ensure_session_token
  	before_validation :ensure_session_token_uniqueness

    attr_reader :password

    has_many(
      :nap_spots,
      primary_key: :id,
      foreign_key: :owner_id,
      class_name: 'NapSpot'
    )

    has_many(
      :bookings,
      primary_key: :id,
      foreign_key: :napper_id,
      class_name: 'Booking'
    )

  	def password=(password)
      @password = password
  		self.password_digest = BCrypt::Password.create(password)
  	end

  	def self.find_by_credentials(user_email, password)
  		user = User.find_by(user_email: user_email)
  		return nil unless user
  		user.valid_password?(password) ? user : nil
  	end

    def self.find_or_create_by_auth_hash(auth_hash)
      @user = User.find_by(facebook_uid: auth_hash[:uid])

      if @user.nil?
        @user = User.create!(
          facebook_uid: auth_hash[:uid],
          fname: auth_hash[:info][:name].split(" ")[0],
          lname: auth_hash[:info][:name].split(" ")[1],
          user_email: auth_hash[:info][:email],
          image_url: auth_hash[:info][:image],
          password: SecureRandom.urlsafe_base64
        )
      end
      @user
    end

  	def valid_password?(password)
  		BCrypt::Password.new(self.password_digest).is_password?(password)
  	end

  	def reset_session_token!
  		self.session_token = new_session_token
  		ensure_session_token_uniqueness
  		self.save
  		self.session_token
  	end

  	private

  	def ensure_session_token
  		self.session_token ||= new_session_token
  	end

  	def new_session_token
  		SecureRandom.urlsafe_base64
  	end

  	def ensure_session_token_uniqueness
  		while User.find_by(session_token: self.session_token)
  			self.session_token = new_session_token
  		end
  	end

end
