class Api::UsersController < ApplicationController
  def create
		@user = User.new(user_params)
  
		if @user.save
			login(@user)
			render "api/users/show"
		else
			render json: @user.errors, status: 422
		end
	end

  def show
    render "api/users/show"
  end

	private

	def user_params
		params.require(:user).permit(:user_email, :password)
	end

end
