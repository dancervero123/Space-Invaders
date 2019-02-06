const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e=> {
    cursor.setAttribute("style","top:"+(e.pageY+5)+"px; left:"+(e.pageX-35)+"px;");
});

$("#bugOne").click(function() {
    $("#bugOne").hide();
});

$("#bugTwo").click(function() {
    $("#bugTwo").hide();
});

$("#bugThree").click(function() {
    $("#bugThree").hide();
});

$("#bugFour").click(function() {
    $("#bugFour").hide();
});

$("#bugFive").click(function() {
    $("#bugFive").hide();
});

$("#bugSix").click(function() {
    $("#bugSix").hide();
});

$("#bugSeven").click(function() {
    $("#bugSeven").hide();
});

$("#bugEight").click(function() {
    $("#bugEight").hide();
});

$("#bugNine").click(function() {
    $("#bugNine").hide();
});

$("#bugTen").click(function() {
    $("#bugTen").hide();
});

$("#bugEleven").click(function() {
    $("#bugEleven").hide();
});

$("#bugTwelve").click(function() {
    $("#bugTwelve").hide();
});

$("#bugThirteen").click(function() {
    $("#bugThirteen").hide();
});

$("#bugFourteen").click(function() {
    $("#bugFourteen").hide();
});

$("#bugFifteen").click(function() {
    $("#bugFifteen").hide();
});

$("#bugSixteen").click(function() {
    $("#bugSixteen").hide();
});

$(".dot").mouseenter(function() {
    $("#bugOne").hide();
    $("#bugTwo").hide();
    $("#bugThree").hide();
    $("#bugFour").hide();
    $("#bugFive").hide();
    $("#bugSix").hide();
    $("#bugSeven").hide();
    $("#bugEight").hide();
    $("#bugNine").hide();
    $("#bugTen").hide();
    $("#bugEleven").hide();
    $("#bugTwelve").hide();
    $("#bugThirteen").hide();
    $("#bugFourteen").hide();
    $("#bugFifteen").hide();
    $("#bugSixteen").hide();
    $(".gameover").show();
    $(".dot").hide();
    $(".title").hide();
    $("button").show();


$("button").dblclick(function() {
    $("#bugOne").show();
    $("#bugTwo").show();
    $("#bugThree").show();
    $("#bugFour").show();
    $("#bugFive").show();
    $("#bugSix").show();
    $("#bugSeven").show();
    $("#bugEight").show();
    $("#bugNine").show();
    $("#bugTen").show();
    $("#bugEleven").show();
    $("#bugTwelve").show();
    $("#bugThirteen").show();
    $("#bugFourteen").show();
    $("#bugFifteen").show();
    $("#bugSixteen").show();
    $(".gameover").hide();
    $(".dot").show();
    $(".title").show();
    $("button").hide();
});
    
    
    
    
});