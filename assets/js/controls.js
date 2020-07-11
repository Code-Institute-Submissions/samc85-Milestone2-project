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

$("#relax").click(function(){
  alert("The paragraph was clicked.");
});




})
