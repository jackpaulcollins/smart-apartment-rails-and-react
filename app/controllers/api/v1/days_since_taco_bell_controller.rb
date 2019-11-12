class Api::V1::DaysSinceTacoBellController < ApplicationController
  def index
      last_day_for_jack = Tacobell.where(owner: "Jack").last
      last_day_for_pete = Tacobell.where(owner: "Pete").last
      render json: [last_day_for_jack, last_day_for_pete]
  end

  def calc_streak(date)
    streak = date.days_since
    return streak
  end
  
  def create
    if params[:personToReset] = "Jack"
      Tacobell.update(owner: params[:personToReset], lastday: Date.today)
    end
    if params[:personToReset] = "Pete"
      Tacobell.update(owner: params[:personToReset], lastday: Date.today)
      #problem, this is always overwriting the record in the database ^
      #Jack and Pete should have their own database tables
      #The db should probaby have a table of users
      #and each user should have a section of last_day to track streak
  end

  def destroy
  end
end
