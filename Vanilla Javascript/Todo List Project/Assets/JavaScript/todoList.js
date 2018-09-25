$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

$("ul").on("click", ".deleteTodo", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });

    event.stopPropogation;
});

$("input[type='text']").keypress(function(event){

    if(event.which === 13){
        var todoTask = $(this).val();
        $(this).val("");

        $("ul").append("<li><span class='deleteTodo'><i class='fas fa-trash'></i></span>" + todoTask + "</li>");
    }

});

$(".fa-pencil-alt").on("click", function(){
    
    $("input[type='text']").fadeToggle();

});