class TodoController < ApplicationController
    def index
    end
    def show
        @todo_name="Eat"
        @todo_days= 4
        
        todo_id=params[:id]
        #@todo_days will be 0.00001 day(s)
    @todo= Todo.find_by_id(params[:id])
=begin
        if todo_id== '1'
            @todo_name='Buy a giraffe'
            @todo_days= 20
            
        elsif todo_id=='2'
            @todo_name='See a dead plant'
            @todo_days= 20
            
        elsif todo_id=='3'
            @todo_name='Call someone'
            @todo_days=0.1
        
        elsif todo_id=='4'
            @todo_name='Read 200 chapters of textbooks'
            @todo_days=0.00001
        
        else
            @todo_name='error'
            @todo_days=0
            
        
        end
=end        
        #when user goes to
        #todo/show/1
        #@todo_name will be
        #buy a giraffe and
        #@todo_days will be 20 day(s)
        
        #when user goes to
        #todo/show/2
        #@todo_name will be
        #See a dead plant and
        #@todo_days will be 1 day(s)
        
        #when user goes to
        #todo/show/3
        #@todo_name will be
        #Call someone and
        #@todo_days will be 0.1 day(s)
        
        #when user goes to
        #todo/show/4
        #@todo_name will be
        #Read 200 chapters of textbooks and

        
    end
    def new
    end
    def create
        t=Todo.new
        t.description= params['description']
        t.time_estimate= params['time_estimate']
        t.save
        redirect_to "/todo/show/#{t.id}"
    end
    
end