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

//------- discover gallery
$(document).ready(function(){
  $(".countryroad").click(function(){
    $(".countryroad").hide("slow");
  });
});

$(document).ready(function(){
  $(".countryroad-text").click(function(){
    $(".countryroad-text").hide("slow");
  });
});


$(document).ready(function(){
  $(".countryroad-text").click(function(){
    $(".countryroad").show("slow");
  });
});

$(document).ready(function(){
  $(".countryroad").click(function(){
    $(".countryroad-text").show("slow");
  });
});

//------
$(document).ready(function(){
  $(".water").click(function(){
    $(".water").hide("slow");
  });
});

$(document).ready(function(){
  $(".water-text").click(function(){
    $(".water-text").hide("slow");
  });
});


$(document).ready(function(){
  $(".water-text").click(function(){
    $(".water").show("slow");
  });
});

$(document).ready(function(){
  $(".water").click(function(){
    $(".water-text").show("slow");
  });
});

//------

$(document).ready(function(){
  $(".wrestling").click(function(){
    $(".wrestling").hide("slow");
  });
});

$(document).ready(function(){
  $(".wrestling-text").click(function(){
    $(".wrestling-text").hide("slow");
  });
});


$(document).ready(function(){
  $(".wrestling-text").click(function(){
    $(".wrestling").show("slow");
  });
});

$(document).ready(function(){
  $(".wrestling").click(function(){
    $(".wrestling-text").show("slow");
  });
});

//

$(document).ready(function(){
  $(".mine").click(function(){
    $(".mine").hide("slow");
  });
});

$(document).ready(function(){
  $(".mine-text").click(function(){
    $(".mine-text").hide("slow");
  });
});


$(document).ready(function(){
  $(".mine-text").click(function(){
    $(".mine").show("slow");
  });
});

$(document).ready(function(){
  $(".mine").click(function(){
    $(".mine-text").show("slow");
  });
});

//

$(document).ready(function(){
  $(".fairg").click(function(){
    $(".fair").hide("slow");
  });
});

$(document).ready(function(){
  $(".fair-text").click(function(){
    $(".fair-text").hide("slow");
  });
});


$(document).ready(function(){
  $(".fair-text").click(function(){
    $(".fair").show("slow");
  });
});

$(document).ready(function(){
  $(".fair").click(function(){
    $(".fair-text").show("slow");
  });
});

//

$(document).ready(function(){
  $(".spa").click(function(){
    $(".spa").hide("slow");
  });
});

$(document).ready(function(){
  $(".spa-text").click(function(){
    $(".spa-text").hide("slow");
  });
});


$(document).ready(function(){
  $(".spa-text").click(function(){
    $(".spa").show("slow");
  });
});

$(document).ready(function(){
  $(".spa").click(function(){
    $(".spa-text").show("slow");
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
