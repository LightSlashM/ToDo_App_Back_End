class TodoController < ApplicationController
    def index
    end
    def show
        @todo_name="Eat"
        @todo_days= 4
    end
    
end