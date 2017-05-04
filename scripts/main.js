//fade in sections depending on nav selection
$("#nav-projects").click(function() {
    fadeOutActiveDiv();
    fadeInProjectsDiv();
});

$("#nav-school").click(function() {
    fadeOutActiveDiv();
    fadeInSchoolDiv();
    $("#school-gpa-inner").css("width", "0");
    $("#school-gpa-inner").animate({
        width: "92%"
    }, 1500);
});

$("#nav-about").click(function() {
    fadeOutActiveDiv();
    fadeInAboutDiv();
});

$("#nav-contact").click(function() {
    fadeOutActiveDiv();
    fadeInContactDiv();
});

$("#nav-contact2").click(function() {
    fadeOutActiveDiv();
    fadeInContactDiv();
});

// -------------------------  FUNCTIONS  -------------------------

function fadeOutActiveDiv() {
    $(".active-div").removeClass("active-div");
    $(".active-nav").removeClass("active-nav");
}

function fadeInProjectsDiv() {
    $("#nav-projects").addClass("active-nav");
    $("#projects").addClass("active-div");
}

function fadeInSchoolDiv() {
    $("#nav-school").addClass("active-nav");
    $("#school").addClass("active-div");
}

function fadeInAboutDiv() {
    $("#nav-about").addClass("active-nav");
    $("#about").addClass("active-div");
}

function fadeInContactDiv() {
    $("#nav-contact").addClass("active-nav");
    $("#contact").addClass("active-div");
}
