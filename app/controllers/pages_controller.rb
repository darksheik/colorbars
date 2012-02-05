class PagesController < ApplicationController
  
  def home
    @colors = Array.new
    (1..4).each do |i|
      if (user_signed_in?) then
	@setting = Setting.find(:all, :conditions => { :preference_id => i, :user_id => current_user}).first
	if (@setting == nil) then @colors[i] = '0,255,0' else @colors[i] = @setting.value end
      else
	# Default color
	@colors[i] = '0,255,0'
      end
    end
  end
end
