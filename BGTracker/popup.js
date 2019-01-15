$(function() {
    $('#smallWorldButton').click(function(){
        window.location.replace("statistics.html");
        $('#bgName').text("Small World stats");
    })

    $('#magicMazeButton').click(function(){
        window.location.replace("statistics.html");
    })

    $('#backButton').click(function(){
        window.location.replace("popup.html");
    })
})

$(function() {
    $('#name').keyup(function(){
        $('#greet').text('Hello ' + $('#name').val());   
    })
})