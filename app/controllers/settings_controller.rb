class SettingsController < ApplicationController
  
  def show     
  end
  
  
  def saveprefs
      @user = current_user
      succcount = 0
      (1..4).each do |i|
	@preference = Preference.find(i)
        @setting = Setting.find(:all, 
	                        :conditions => {:preference_id => @preference,
	                                        :user_id => @user}).first
        if (@setting == nil) then
	  @setting = Setting.new(:preference => @preference,:user => @user)
        end
        @setting.value = params[("color" + i.to_s + "rgb").to_sym]
        if (@setting.save) then 
	  succcount = succcount + 1
        end
      
      end
      @destpage = ''
      if (succcount == 4) 
	@destpage = 'settings/success_message.html.erb'
      else
	@destpage = 'settings/failure_message.html.erb'
      end
      render(:file => @destpage, :layout=>false)
      return false
  end
end
