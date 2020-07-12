$(document).ready(function(){

// Popover function 
$(function () {
  $('[data-toggle="popover"]').popover({
      html: true,
  })
});

$("#show-adventure").click(function(){
  $("#adventure-package").hide();
});

$("#hide-adventure").click(function(){
  $("#adventure-package").show();
});

$("#show-country").click(function(){
  $("#country-package").hide();
});

$("#hide-country").click(function(){
  $("#country-package").show();
});

$("#show-comfort").click(function(){
  $("#comfort-package").hide();
});

$("#hide-comfort").click(function(){
  $("#comfort-package").show();
});

// Quiz

// function to calculate the result of the survey


   
$("#explore").click(function(){
    $(".pre-result").hide();
});

$("#explore").click(function(){
    $(".post-result").show();
});


  $("#relax").click(function(){
    alert("Time to explore");
});
    

 $("#sightsee").click(function(){
    alert("Time to explore");
});
    
//gallery images




   



})
