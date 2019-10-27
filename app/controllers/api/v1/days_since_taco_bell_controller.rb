class Api::V1::DaysSinceTacoBellController < ApplicationController
  def index
      last_day = Tacobell.all
      render json: last_day
  end

  def create
  end

  def show
  end

  def update
  end

  def destroy
  end
end
