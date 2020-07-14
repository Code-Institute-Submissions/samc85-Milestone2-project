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


//quiz

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
    
//gallery

$(document).ready(function(){
  $(".arnside").click(function(){
    $(".arnside").hide("slow");
  });
});

$(document).ready(function(){
  $(".arnside-text").click(function(){
    $(".arnside-text").hide("slow");
  });
});

$(document).ready(function(){
  $(".arnside-text").click(function(){
    $(".arnside").show("slow");
  });
});

$(document).ready(function(){
  $(".arnside").click(function(){
    $(".arnside-text").show("slow");
  });
});

//------------

$(document).ready(function(){
  $(".bird").click(function(){
    $(".bird").hide("slow");
  });
});

$(document).ready(function(){
  $(".bird-text").click(function(){
    $(".bird-text").hide("slow");
  });
});


$(document).ready(function(){
  $(".bird-text").click(function(){
    $(".bird").show("slow");
  });
});

$(document).ready(function(){
  $(".bird").click(function(){
    $(".bird-text").show("slow");
  });
});

//------

$(document).ready(function(){
  $(".bike").click(function(){
    $(".bike").hide("slow");
  });
});

$(document).ready(function(){
  $(".bike-text").click(function(){
    $(".bike-text").hide("slow");
  });
});

$(document).ready(function(){
  $(".bike-text").click(function(){
    $(".bike").show("slow");
  });
});

$(document).ready(function(){
  $(".bike").click(function(){
    $(".bike-text").show("slow");
  });
});

//------

$(document).ready(function(){
  $(".beach").click(function(){
    $(".beach").hide("slow");
  });
});

$(document).ready(function(){
  $(".beach-text").click(function(){
    $(".beach-text").hide("slow");
  });
});


$(document).ready(function(){
  $(".beach-text").click(function(){
    $(".beach").show("slow");
  });
});

$(document).ready(function(){
  $(".beach").click(function(){
    $(".beach-text").show("slow");
  });
});

//quiz


$(".true").click(function(){
  $(".submit").html("Why not try an adventure package");
});

$(".false").click(function(){
  $(".submit").html("Why not try our country or comfort packages");
});




})
