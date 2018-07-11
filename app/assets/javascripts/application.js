
// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

console.log("Hello World");
/*
$(document.ready(function(){
    $("u1").on("click",input[type="checkbox"],function()
        {$(this).closest("li").toggleClass("completed-todo") })
}))
*/


//$(document).ready(console.log("My life is a lie"));
    
/*
$(document).ready(function({ 
    console.log("im ready");
    $("#add-todo-btn").click(function(){
     console.log("button functions are up to code")
    })
}
)
)
*/
/*
$(document).ready(function(){
    //$(".material-icons").hide()
    console.log("Im ready")
    $("#add-todo-btn").click(function(){
        console.log("Buttons are now functional")
        var nameOfTodo =$("#new-todo-name").val();
        var timeOfTodo =$("#new-todo-days").val();
        console.log(nameOfTodo)
        console.log(timeOfTodo)

        $("ul").append( "<li class='index-bar'> <input type='checkbox' class='check'><a href='show/3' style='text-decoration:none'>"+nameOfTodo+"</a><span class='day-est'>"+timeOfTodo+"day(s)</span></li>")
})
                      
            $("ul").on("click","input[type='checkbox']",function(){
                $(this).closest("li").toggleClass("completed-todo")
        
            })
            */
            $(document).ready(function(){
    //$(".material-icons").hide()
    console.log("Im ready")
    $("#add-todo-btn").click(function(){
        console.log("Buttons are now functional")
        var nameOfTodo =$("#new-todo-name").val();
        var timeOfTodo =$("#new-todo-days").val();
        console.log(nameOfTodo)
        console.log(timeOfTodo)

        $("ul").append("<li class='index-bar'> <input type='checkbox' class='check'><a href='show/1' style='text-decoration:none'> "+nameOfTodo+" </a><span class='day-est'>"+timeOfTodo+" day(s)</span></li>")
            })
            
            $("ul").on("click","input[type='checkbox']",function(){
        $(this).closest("li").toggleClass("completed-todo")
        
            })
         /*   
            $("li").hover(function({$(this).closest(".material-icons").show()
            console.log("checkmate");},
                   function(){
                    $(".material-icons").hide(););

                    */
                    /*
            $("li").hover(function(){
                console.log($(this).closest("i"))
                $(this).closest(".material-icons").show()
                console.log("checkmate");
            })
            */
         /*  while( $(".bar").hover()) {
                $(".material-icons").show();
            }
            */
           /*
           setInterval(function(){
                var $sample = $(".bar");
                var $changed = $(".material-icons");
             if($sample.is(":hover")) {
                $changed.css("background", "red");
             }
                else {
                $changed.css("background", "green");
                    }
            }, 200);
            
            */
})