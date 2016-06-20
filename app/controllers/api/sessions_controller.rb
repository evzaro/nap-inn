class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(
      params[:user][:user_email],
      params[:user][:password]
    )

    if @user
      login(@user)
      render "api/users/show"
    else
      render(
        json:{
          base:["Invalid email/password"]
        },
        status: 401
      )
    end
  end

  def create_with_fb
    @user = User.find_or_create_by_auth_hash(auth_hash)

    if @user
      login(@user)
      redirect_to root_url
    else
      render(
        json:{
          base:["Facebook Authentication Failed"]
        },
        status: 401
      )
    end
  end

	def destroy
		@user = current_user
		if @user
			logout
		  render "api/users/show"
		else
			render(
        json: {
          base: ["Nobody signed in"]
        },
        status: 404
      )
		end
	end

  def show
		if current_user
			@user = current_user
		  render "api/users/show"
		else
			render json: {}
		end
	end

  private

  def auth_hash
    request.env['omniauth.auth']
  end

end
