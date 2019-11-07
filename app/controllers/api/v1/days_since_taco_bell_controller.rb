class Api::V1::DaysSinceTacoBellController < ApplicationController
  def index
      last_day_for_jack = Tacobell.where(owner: "Jack")
      last_day_for_pete = Tacobell.where(owner: "Pete")
      respond_to do |format|
        format.json  { render :json => {:jack => last_day_for_jack, 
                                        :pete => last_day_for_pete }}
      end
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
