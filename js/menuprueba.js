
  
  var checker = true;
  $("#hamburger").click(function () {
    targetLeft = checker ? "158px" : "20px";
    targetRight = checker ? "130px" : "20px";
    targetMiddle = checker ? "148px" : "20px";
    $("#hamburger").animate({left: targetLeft},400);
    $("#menuicon2").animate({left: targetRight},400);
    $("#menuicon3").fadeToggle(400); 
    $("#menuicon3").animate({left: targetMiddle},{queue: false},400);      
    checker ? checker = false : checker = true;
});




$(document).ready(function(){
  $('#hamburger').click(function(){
    $('.menu-hide').toggleClass('show');
  });
});
