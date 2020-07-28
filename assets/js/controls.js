$(document).ready(function () {
    // Popover function
    $("[data-toggle='popover']").popover({
        html: true,
    });
    // Country gallery
    $(".bath").click(function () {
        $(".bath-text").slideToggle("slow");
    });

    $(".country-day1and2").click(function () {
        $(".bath").hide();
        $(".beachkite").hide();
        $(".cartmel").hide();
        $(".dogchase").hide();
        $(".bath-text").hide();
        $(".cartmel-text").hide();
        $(".dogchase-text").hide();
    });

    $(".country-day1and2").click(function () {
        $(".beachkite").show("slow");
        $(".beachkite-text").slideToggle("slow");
    });

    $(".country-day3and4").click(function () {
        $(".beachkite").hide();
        $(".bath").hide();
        $(".dogchase").hide();
        $(".bath-text").hide();
        $(".beachkite-text").hide();
        $(".dogchase-text").hide();
    });

    $(".country-day3and4").click(function () {
        $(".cartmel").show("slow");
        $(".cartmel-text").slideToggle("slow");
    });

    $(".country-day5and6").click(function () {
        $(".cartmel").hide();
        $(".beachkite").hide();
        $(".bath").hide();
        $(".bath-text").hide();
        $(".cartmel-text").hide();
        $(".beachkite-text").hide();
    });

    $(".country-day5and6").click(function () {
        $(".dogchase").show("slow");
        $(".dogchase-text").slideToggle("slow");
    });

    //---- adventure packages -----//

    $(".friends").click(function () {
        $(".adventure-text").slideToggle("slow");
    });

    $(".adventure-day1and2").click(function () {
        $(".friends").hide();
        $(".sail").hide();
        $(".hike").hide();
        $(".adventure-3and4-text").hide();
        $(".adventure-5and6-text").hide();
        $(".adventure-text").hide();
    });

    $(".adventure-day1and2").click(function () {
        $(".cycle-pair").show("slow");
        $(".adventure-1and2-text").slideToggle("slow");
    });

    $(".adventure-day3and4").click(function () {
        $(".cycle-pair").hide();
        $(".friends").hide();
        $(".sail").hide();
        $(".adventure-1and2-text").hide();
        $(".adventure-5and6-text").hide();
        $(".adventure-text").hide();
    });

    $(".adventure-day3and4").click(function () {
        $(".hike").show("slow");
        $(".adventure-3and4-text").slideToggle("slow");
    });

    $(".adventure-day5and6").click(function () {
        $(".hike").hide();
        $(".cycle-pair").hide();
        $(".friends").hide();
        $(".adventure-1and2-text").hide();
        $(".adventure-3and4-text").hide();
        $(".adventure-text").hide();
    });

    $(".adventure-day5and6").click(function () {
        $(".sail").show("slow");
        $(".adventure-5and6-text").slideToggle("slow");
    });

    //--- comfort packages ----//

    $(".farm").click(function () {
        $(".farm-text").slideToggle("slow");
    });

    $(".comfort-day1and2").click(function () {
        $(".farm").hide();
        $(".farm-text").hide();
        $(".picnic").hide();
        $(".picnic-text").hide();
        $(".forest").hide();
        $(".forest-text").hide();
        $(".window").hide();
        $(".window-text").hide();
    });

    $(".comfort-day1and2").click(function () {
        $(".picnic").show("slow");
        $(".picnic-text").slideToggle("slow");
    });

    $(".comfort-day3and4").click(function () {
        $(".farm").hide();
        $(".farm-text").hide();
        $(".picnic").hide();
        $(".picnic-text").hide();
        $(".window").hide();
        $(".window-text").hide();
    });

    $(".comfort-day3and4").click(function () {
        $(".forest").show("slow");
        $(".forest-text").slideToggle("slow");
    });

    $(".comfort-day5and6").click(function () {
        $(".farm").hide();
        $(".farm-text").hide();
        $(".picnic").hide();
        $(".picnic-text").hide();
        $(".forest").hide();
        $(".forest-text").hide();
    });

    $(".comfort-day5and6").click(function () {
        $(".window").show("slow");
        $(".window-text").slideToggle("slow");
    });

    //-----  Packages  --------//

    $("#show-adventure").click(function () {
        $("#adventure-package").hide();
    });

    $("#hide-adventure").click(function () {
        $("#adventure-package").show();
    });

    $("#show-country").click(function () {
        $("#country-package").hide();
    });

    $("#hide-country").click(function () {
        $("#country-package").show();
    });

    $("#show-comfort").click(function () {
        $("#comfort-package").hide();
    });

    $("#hide-comfort").click(function () {
        $("#comfort-package").show();
    });

    // fact cards
    $(document).ready(function () {
        $(".fact2").click(function () {
            $(".show-fact2").slideToggle("slow");
        });
        $(".fact1").click(function () {
            $(".show-fact1").slideToggle("slow");
        });
        $(".fact3").click(function () {
            $(".show-fact3").slideToggle("slow");
        });
    });

    //------- discover gallery
    $(document).ready(function () {
        $(".countryroad").click(function () {
            $(".countryroad-text").slideToggle("slow");
        });
    });

    $(document).ready(function () {
        $(".water").click(function () {
            $(".water-text").slideToggle("slow");
        });
    });

    $(document).ready(function () {
        $(".wrestling").click(function () {
            $(".wrestling-text").slideToggle("slow");
        });
    });

    $(document).ready(function () {
        $(".mine").click(function () {
            $(".mine-text").slideToggle("slow");
        });
    });

    $(document).ready(function () {
        $(".fair").click(function () {
            $(".fair-text").slideToggle("slow");
        });
    });

    $(document).ready(function () {
        $(".spa").click(function () {
            $(".spa-text").slideToggle("slow");
        });
    });
});

//quiz -  structure followed codeexplained.org sample on youtube, however customised to meet client purpose

// function to calculate the result of the survey
$(document).ready(
    (score = () => {
        let adventurescore = 0;
        let comfortscore = 0;
        let countryscore = 0;

        // get a list of the radio inputs on the page
        let choices = document.getElementsByTagName("input");
        // loop through all the radio inputs
        for (i = 0; i < choices.length; i++) {
            // if the radio is checked..
            if (choices[i].checked) {
                // add 1 to that choice's score
                if (choices[i].value == "ad1") {
                    adventurescore = adventurescore + 1;
                }
                if (choices[i].value == "com2") {
                    comfortscore = comfortscore + 1;
                }
                if (choices[i].value == "coun3") {
                    countryscore = countryscore + 1;
                }
            }
        }
        // Find out which choice got the highest score.
        let maxscore = Math.max(adventurescore, comfortscore, countryscore);
        // Display answer corresponding to that choice
        let answerbox = document.getElementById("answer");
        if (adventurescore == maxscore) {
            // If user chooses the first choice the most, this outcome will be displayed.
            answerbox.innerHTML = "You are an adventure seeker... why not look at our Adventure package";
        }
        if (comfortscore == maxscore) {
            // If user chooses the second choice the most, this outcome will be displayed.
            answerbox.innerHTML = "Looking for a relaxing getaway? Enjoy a week away in our Comfort package";
        }
        if (countryscore == maxscore) {
            // If user chooses the third choice the most, this outcome will be displayed.
            answerbox.innerHTML = "You seek the Country life... enjoying nature, local towns... why not explore our Country packages";
        }
    })
);

// program the reset button
$(document).ready(
    (resetAnswer = () => {
        let answerbox = document.getElementById("answer");
        answerbox.innerHTML = "Your result will show up here!";
    })
);
