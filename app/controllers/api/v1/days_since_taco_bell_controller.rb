class Api::V1::DaysSinceTacoBellController < ApplicationController
  def index
    interval_for_jack = Tacobell.where("owner = 'Jack'")
    interval_for_pete = Tacobell.where("owner = 'Pete'")
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
