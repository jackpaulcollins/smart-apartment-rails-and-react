class Api::V1::DaysSinceTacoBellController < ApplicationController
  def index
      last_day_for_jack = Tacobell.where(owner: "Jack")
      last_day_for_pete = Tacobell.where(owner: "Pete")
      render json: [last_day_for_jack, last_day_for_pete]
  end

  def calc_streak(date)
    streak = date.days_since
    return streak
  end
  
  def create
    if params[:personToReset] = "Jack"
      jacks_last_day = Tacobell.update(owner: params[:personToReset], lastday: Date.today)
      render json: jacks_last_day
    end
    if params[:personToReset] = "Pete"
      petes_last_day = Tacobell.update(owner: params[:personToReset], lastday: Date.today)
      render json: petes_last_day
    end
  end

  def destroy
  end
end
