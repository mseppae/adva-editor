class EditorController < ApplicationController
  
  def index
  end
  def pool
  render(:partial=>"pool")
  end
  
 def menu
  @image_id=params[:id]
   render(:partial=>"layouts/submenu")
end

 

  
end
