class Api::SessionsController < ApplicationController

    protect_from_forgery except: [:create]

    def create
        @user = User.find_by_credentials(
            params[:user][:username],
            params[:user][:password]
        )
    
        if @user
            login(@user)
            render "api/users/show"
        else
            render json: ["Invalid username/password combination"], status: 401
        end
    end
  
    def destroy
        @user = current_user
        if @user
            logout
            render "api/users/show"
        else
            render json: ["You aren't logged in"], status: 401
        end
    end

end
  