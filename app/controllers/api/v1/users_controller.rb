class Api::V1::UsersController < ApplicationController
  def index
    user = User.all
  end

  def jack
    user = User.where(first_name: "Jack")
    render json: user 
  end

  def pete
    user = User.where(first_name: "Pete")
    render json: user 
  end

  def update
    user = User.find_by(first_name: params[:personToReset])
    user.update(last_day_having_tacobell: Time.now)
    render json: user 
  end
end
