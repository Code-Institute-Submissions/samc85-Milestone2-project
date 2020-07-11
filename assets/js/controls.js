$(document).ready(function(){

$(function () {
  $('[data-toggle="popover"]').popover({
      html: true,
  }
  )
})


$("#show").click(function(){
  $("#adventure-package").hide();
});

$("#hide").click(function(){
  $("#adventure-package").show();
});



});


