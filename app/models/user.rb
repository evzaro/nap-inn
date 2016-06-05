class User < ActiveRecord::Base

  	validates :user_email, :password_digest, :fname, :lname, :session_token, presence: true
  	validates :user_email, uniqueness: true
  	validates :password, length: {minimum: 6, allow_nil: true}

  	after_initialize :ensure_session_token
  	before_validation :ensure_session_token_uniqueness

    attr_reader :password

  	def password=(password)
      @password = password
  		self.password_digest = BCrypt::Password.create(password)
  	end

  	def self.find_by_credentials(user_email, password)
  		user = User.find_by(user_email: user_email)
  		return nil unless user
  		user.valid_password?(password) ? user : nil
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
