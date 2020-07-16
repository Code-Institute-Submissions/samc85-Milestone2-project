$(document).ready(function(){

// Popover function 
$(function () {
  $('[data-toggle="popover"]').popover({
      html: true,
  })
});

// Country gallery
$(".country-day1").click(function(){
    $(".bath").hide();
    $(".beachkite").hide();
    $(".cartmel").hide();
    $(".dogchase").hide();
});

$(".country-day1").click(function(){
    $(".beachkite").show("slow");
});

$(".beachkite").click(function(){
    $(".beachkite-text").slideToggle("slow");
});

$(".country-day2").click(function(){
    $(".beachkite").hide();
    $(".bath").hide();
    $(".dogchase").hide();
});

$(".country-day2").click(function(){
    $(".cartmel").show("slow");
});

$(".cartmel").click(function(){
    $(".cartmel-text").slideToggle("slow");
});

$(".country-day3").click(function(){
    $(".cartmel").hide();
    $(".beachkite").hide();
    $(".bath").hide();
});

$(".country-day3").click(function(){
    $(".dogchase").show("slow");
});

$(".dogchase").click(function(){
    $(".dogchase-text").slideToggle("slow");
});

//-------------//

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

})

//quiz

// function to calculate the result of the survey
$(document).ready(score = () => {
  // initialize variables for each choice's score
  // If you add more choices and outcomes, you must add another variable here.
  let c1score = 0;
  let c2score = 0;
  let c3score = 0;
  let c4score = 0;

  // get a list of the radio inputs on the page
  let choices = document.getElementsByTagName('input');
  // loop through all the radio inputs
  for (i=0; i<choices.length; i++) {
    // if the radio is checked..
    if (choices[i].checked) {
      // add 1 to that choice's score
      if (choices[i].value == 'c1') {
        c1score = c1score + 1;
      }
      if (choices[i].value == 'c2') {
        c2score = c2score + 1;
      }
      if (choices[i].value == 'c3') {
        c3score = c3score + 1;
      }
      if (choices[i].value == 'c4') {
        c4score = c4score + 1;
      }
      // If you add more choices and outcomes, you must add another if statement below.
    }
  }
  
  // Find out which choice got the highest score.
  // If you add more choices and outcomes, you must add the variable here.
  let maxscore = Math.max(c1score,c2score,c3score,c4score);
  
  // Display answer corresponding to that choice
  let answerbox = document.getElementById('answer');
  if (c1score == maxscore) { // If user chooses the first choice the most, this outcome will be displayed.
    answerbox.innerHTML = "You are a computer researcher! You will enjoy developing algorithms, and doing things with computers no one else has done before. For example, researchers sent a robot to the moon, built a computer to beat the best humans in Jeopardy, and are creating robots to do your chores for you. Computer researchers typically go to college and work at universities, or as a part of the research and development team in companies.";
  }
  if (c2score == maxscore) { // If user chooses the second choice the most, this outcome will be displayed.
    answerbox.innerHTML = "You are an altruistic coder! You love to help people and feel the positive impact of your work every day. Altrustic coders are out there every day making the world a better place. Computer scientists write software to more effectively help doctors diagnose illnesses such as cancer, connect people in third world countries to education and medical resources on the internet, code websites and software for nonprofit organizations, and much more!";
  }
  if (c3score == maxscore) { // If user chooses the third choice the most, this outcome will be displayed.
    answerbox.innerHTML = "You are a developer! Developers create games, apps, social media, movies, and all sorts of fun programs that people enjoy. These coders work on projects such as Minecraft, Poptropica, and Youtube. Developers need sharp coding skills, are great debuggers, and need to work well in a team of other developers.";
  }
  if (c4score == maxscore) { // If user chooses the fourth choice the most, this outcome will be displayed.
    answerbox.innerHTML = "You are the future CEO of a new startup! You enjoy taking risks and building the next big thing that no one has even thought of before. For example, billionare Mark Zuckerberg founded Facebook in 2004, a project he started inside his dorm room in college which eventually turned into a social networking revolution that changed the world.";
  }
  // If you add more choices, you must add another response below.
})

// program the reset button
$(document).ready(resetAnswer = () => {
  let answerbox = document.getElementById('answer');
  answerbox.innerHTML = "Your result will show up here!";
})





