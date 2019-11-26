class UsersController < ApplicationController
    # skip_before_action :verify_authenticity_token

    def index
        users = User.all
        render json: users
    end

    def create
        user = User.new(user_params)
        if user.save
            render json: user
        else
            render json: {errors: user.errors.full_messages}, status: 403
        end
    end
    
    def show
        user = User.find(params[:id])
        render json: user
    end

    def update
        user = User.find(params[:id])
        user.update(user_params)
        render json: user
    end

    def destroy
        user = User.find(params[:id])
        user.destroy()
    end

    private
    def user_params
        params.require(:user).permit(:given_name, :family_name, :email, :username)
    end
end