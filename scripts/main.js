// -------------------------  MAIN  -------------------------
var isMobile = false;
var text = "Hello, my name is Yale. I'm a Network Architect who likes to draw, code, and create.";
var charCount = text.length;
var currentLetterCount = 0;
var speed = 80; // How fast should it type?
var timerId;
var writerSwitch = true;


//on load
$(window).load(function() {
  if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r850|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
    isMobile = true;
  }

  if (isMobile == true) {
    screenIsMobile();
  }
  if (isMobile == false) {
    //check screen size & adjust fonts
    if ($(window).width() < 850) {
      screenSmallerThan850();
    } else if ($(window).width() < 1400) {
      $(".nav-items").delay(800).fadeIn(1000);
      screenSmallerThan1400();
    } else {
      $(".nav-items").delay(800).fadeIn(1000);
      screenBiggerThan1400();
    }
  }

  fadeInIntroPic();
  //added in case the fade does not work
  // $("#intro-pic").css("display", "grid");

  //on click
  $(".nav-yo").click(function() {
    scrollToTop();
    closeMiniNav();
  });
  $(".nav-about").click(function() {
    scrollToAbout();

  });
  $(".nav-work").click(function() {
    scrollToWork();
  });
  $(".nav-education").click(function() {
    scrollToEducation();
  });
  $(".nav-projects").click(function() {
    scrollToProjects();
  });
  $(".nav-contact").click(function() {
    scrollToContact();
  });
  //slide down mini nav
  $("#mininav-menu-button-img").click(function() {
    miniNavToggler();
  });
  $(".mininav-items").click(function() {
    miniNavToggler();
  });

  //on hover
  //toggles overlay for projects
  $(".projects-container").hover(function() {
    $(this).find(".projects-overlay").stop().fadeToggle().css("display", "flex");
  });
  //toggles overlay for social icons
  $(".social-container").hover(function() {
    $(this).find(".social-overlay").stop().fadeToggle();
  });

  //make the mail icon white on hover
  $("#contact-email").hover(function() {
    $("#mail-icon").attr('src','img/mail-white.png');
  });
  $("#contact-email").mouseleave(function() {
    $("#mail-icon").attr('src','img/mail.png');
  });
  //makes nav items dark when highlighted
  // $(".nav-items").hover(function() {
  //   $(this).css("color", "#4c616d");
  // });


});

// on scroll
$(window).scroll(function() {
  fadeIntroPicOut();

  if ($(window).scrollTop() > $("#intro-pic").offset().top && writerSwitch === true) {
    // writeLetter();
    timerID = setInterval(writeLetter, speed);
    writerSwitch = false;
  }
  if ($(window).scrollTop() < $("#about-div").offset().top - 50) {
    $(".nav-contact").css("color", "#bbb").css("font-weight", "300");
    $(".nav-projects").css("color", "#bbb").css("font-weight", "300");
    $(".nav-education").css("color", "#bbb").css("font-weight", "300");
    $(".nav-work").css("color", "#bbb").css("font-weight", "300");
    $(".nav-about").css("color", "#bbb").css("font-weight", "300");
  }
  if ($("#about-div").offset().top - 50 <= $(window).scrollTop() && $(window).scrollTop() < $("#work-div").offset().top - 50) {
    $(".nav-contact").css("color", "#bbb").css("font-weight", "300");
    $(".nav-projects").css("color", "#bbb").css("font-weight", "300");
    $(".nav-education").css("color", "#bbb").css("font-weight", "300");
    $(".nav-work").css("color", "#bbb").css("font-weight", "300");
    $(".nav-about").css("color", "#4c616d").css("font-weight", "600");
  } else if ($("#work-div").offset().top - 50 <= $(window).scrollTop() && $(window).scrollTop() < $("#education-div").offset().top - 50) {
    $(".nav-contact").css("color", "#bbb").css("font-weight", "300");
    $(".nav-projects").css("color", "#bbb").css("font-weight", "300");
    $(".nav-education").css("color", "#bbb").css("font-weight", "300");
    $(".nav-work").css("color", "#4c616d").css("font-weight", "600");
    $(".nav-about").css("color", "#bbb").css("font-weight", "300");
  } else if ($("#education-div").offset().top - 50 <= $(window).scrollTop() && $(window).scrollTop() < $("#projects-div").offset().top - 50) {
    $(".nav-contact").css("color", "#bbb").css("font-weight", "300");
    $(".nav-projects").css("color", "#bbb").css("font-weight", "300");
    $(".nav-education").css("color", "#4c616d").css("font-weight", "600");
    $(".nav-work").css("color", "#bbb").css("font-weight", "300");
    $(".nav-about").css("color", "#bbb").css("font-weight", "300");
  } else if ($("#projects-div").offset().top - 50 <= $(window).scrollTop() && $(window).scrollTop() < $("#contact-div").offset().top - 50 && $(window).scrollTop() + $(window).height() < $(document).height() - 100) {
    $(".nav-contact").css("color", "#bbb").css("font-weight", "300");
    $(".nav-projects").css("color", "#4c616d").css("font-weight", "600");
    $(".nav-education").css("color", "#bbb").css("font-weight", "300");
    $(".nav-work").css("color", "#bbb").css("font-weight", "300");
    $(".nav-about").css("color", "#bbb").css("font-weight", "300");
  } else if ($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
    $(".nav-contact").css("color", "#4c616d").css("font-weight", "600");
    $(".nav-projects").css("color", "#bbb").css("font-weight", "300");
    $(".nav-education").css("color", "#bbb").css("font-weight", "300");
    $(".nav-work").css("color", "#bbb").css("font-weight", "300");
    $(".nav-about").css("color", "#bbb").css("font-weight", "300");
  }

});

// on window resize
$(window).resize(function() {
  if (isMobile == true) {
    screenIsMobile();
  }
  if (isMobile == false) {
    //check screen size & adjust fonts
    if ($(window).width() < 850) {
      screenSmallerThan850();
    } else if ($(window).width() < 1400) {
      screenSmallerThan1400();
    } else {
      screenBiggerThan1400();
    }
  }
});

// -------------------------  FUNCTIONS  -------------------------

// fade in landing ProjectImages
function fadeInIntroPic() {
  $("#intro-pic").fadeIn(1000);
  $("#intro-title").delay(1000).fadeIn(1000);
  $(".nav-items").animate({
    opacity: 1
  }, 1000);
  $("#intro-downarrow").delay(1500).animate({
    opacity: 1
  }, 1000);
}

function fadeIntroPicOut() {
  $("#intro-pic").css("opacity", 1 - $(this).scrollTop() / 450);
}

function openMiniNav() {
  $("#nav-small-whale").addClass("mininav-items");
  $("#nav-container").fadeIn(1000);
  $("#mininav-div").slideDown(1000);
  $("#mininav-div a").delay(500).fadeIn(1000);
  $("body").css("overflow", "hidden");
}

function closeMiniNav() {
  $("#nav-small-whale").removeClass("mininav-items");
  $("#nav-container").fadeOut(1000);
  $("#mininav-div a").fadeOut(1000);
  $("#mininav-div").fadeOut(1000);
  $("body").css("overflow", "auto");
}

function miniNavToggler() {
  if ($("#mininav-div").is(":hidden")) {
    openMiniNav();
  } else {
    closeMiniNav();
  }
}

//typewriter animation for about section
function writeLetter() {
  var currentLetter = text.charAt(currentLetterCount);
  currentLetterCount++;
  $("#about-text").append(currentLetter);
  if (currentLetterCount == charCount)
    clearInterval(timerId);
}


// -------------------------  SCROLL FUNCTIONS  -------------------------
function scrollToTop() {
  $('html, body').animate({
    scrollTop: 0
  }, 1000);
}

function scrollToAbout() {
  $('html, body').animate({
    scrollTop: $("#about-div").offset().top
  }, 1000);
}

function scrollToWork() {
  $('html, body').animate({
    scrollTop: $("#work-div").offset().top
  }, 1000);
}

function scrollToContact() {
  $('html, body').animate({
    scrollTop: $("#contact-div").offset().top
  }, 1000);
}

function scrollToEducation() {
  $('html, body').animate({
    scrollTop: $("#education-div").offset().top
  }, 1000);
}

function scrollToProjects() {
  $('html, body').animate({
    scrollTop: $("#projects-div").offset().top
  }, 1000);
}


// -------------------------  WINDOW RESIZING FUNCTIONS  -------------------------
function screenIsMobile() {
  $("h4").css("font-size", "10px");
  //navigation
  $("#nav-small-whale").css("width", "80px");
  $("#nav-small-whale").css("padding", "35px");
  $("#mininav-menu-button-img").css("display", "inline");
  $("#mininav-menu-button-img").css("width", "60px");
  $("#mininav-menu-button-img").css("padding", "39px 40px 41px");
  $("#mininav-div").css("top", "111px");
  $("#nav-container").css("height", "112px");
  $(".mininav-items").css("font-size", "40px");
  $(".mininav-items").css("letter-spacing", "25px");
  $("#mininav-div div").css("padding", "100px 0 20px 0");
  $("#mininav-div").css("text-align", "center");
  $(".nav-items").css("display", "none");
  $("#nav-icon").removeClass("nav-left");
  $("#nav-icon").addClass("nav-center");
  //intro
  $("#intro-div").css("padding", "50% 0 0 0");
  $("#intro-title").css("font-size", "40px");
  // $("#intro-downarrow").css("display", "initial");
  $("#intro-downarrow").css("padding", "40% 0 8%");
  //about
  // $("#small-whale-text").css("font-size", "8px");
  // $("#about-text").css("font-size", "50px");
  // $("#about-div").css("padding", "20% 0 12% 0");
  // $("#about-text-div").css("margin", "5% 20%");
  //education
  $("#network-technology").css("font-size", "10px");
  //work
  $("#work-div").css("padding", "10% 5% 0 5%");
  $(".work-div").css("width", "100%");
  $(".work-div").css("margin", "0");
  $(".work-div").css("padding", "0 0 10% 0");
  $(".exp-title").css("font-size", "14px");
  $(".work-title").css("font-size", "20px");
  $(".work-date").css("font-size", "12px");
  $("#gov-title").html("SOFTWARE SYSTEMS DEVELOPER");
  $("#bell-title").html("NETWORK APPLICATIONS ARCHITECT");
  $("#dfatd-title").html("INTERNETWORKING ANALYST");
  //education
  $(".education-div").css("width", "100%");
  $("#awards-div").css("flex-direction", "column");
  $("#awards-div").css("align-items", "center");
  //projects
  $(".projects-col-container").css("flex-direction", "column");
  $(".projects-col-container").css("align-items", "center");
  $("#projects-div").css("padding", "10% 15%");
  $("#projects-subscript").css("padding-bottom", "15%");
  $("#projects-subscript").css("font-size", "10px");
  //contact
  $("#contact-subheader").css("font-size", "10px");
  $(".contact-div").css("text-align", "center");
  $(".contact-info").css("font-size", "10px");
  $(".contact-info").css("letter-spacing", "8px");
  $("#copyright-text").css("font-size", "8px");
}

function screenSmallerThan850() {
  $("h4").css("font-size", "18px");
  //navigation
  $(".nav-items").css("display", "none");
  $("#mininav-menu-button-img").css("display", "inline");
  $("#nav-icon").removeClass("nav-left");
  $("#nav-icon").addClass("nav-center");
  //intro
  $("#intro-div").css("min-height", "none");
  $("#intro-title").css("font-size", "40px");
  // $("#intro-downarrow").css("display", "none");
  $("#intro-downarrow").css("padding", "10% 0 0 0");
  //about
  // $("#small-whale-text").css("font-size", "8px");
  // $("#about-text").css("font-size", "50px");
  // $("#about-div").css("padding", "20% 0 12% 0");
  // $("#about-text-div").css("margin", "5% 20%");
  //work
  $(".exp-title").css("font-size", "0.8em");
  $(".work-title").css("font-size", "20px");
  $("#gov-title").html("SOFTWARE SYSTEMS DEVELOPER");
  $("#bell-title").html("NETWORK APPLICATIONS ARCHITECT");
  $("#dfatd-title").html("INTERNETWORKING ANALYST");
  //education
  $(".education-div").css("width", "100%");
  $("#awards-div").css("flex-direction", "column");
  $("#awards-div").css("align-items", "center");
  //projects
  $(".projects-col-container").css("flex-direction", "column");
  $(".projects-col-container").css("align-items", "center");
  $("#projects-div").css("padding", "10% 15%");
  $("#projects-subscript").css("padding-bottom", "15%");
  $("#projects-subscript").css("font-size", "15px");
  //contact
  $("#contact-subheader").css("font-size", "15px");
  $(".contact-div").css("text-align", "center");
  $(".contact-info").css("font-size", "0.6em");
  $("#copyright-text").css("font-size", "0.6em");
}

function screenSmallerThan1400() {
  $("h4").css("font-size", "20px");
  //mininav
  $("body").css("overflow", "auto");
  $("#nav-container").css("display", "none");
  $("#mininav-div a").css("display", "none");
  $("#mininav-div").css("display", "none");
  //navigation
  $("#mininav-menu-button-img").css("display", "none");
  $("#nav-icon").addClass("nav-left");
  $("#nav-icon").removeClass("nav-center");
  $("#top-nav").css("display", "block");
  $(".nav-items").css("display", "block");
  //intro
  $("#intro-div").css("min-height", "none");
  $("#intro-title").css("font-size", "40px");
  // $("#intro-downarrow").css("display", "none");
  $("#intro-downarrow").css("padding", "10% 0 0 0");
  //about
  // $("#small-whale-text").css("font-size", "10px");
  // $("#about-text").css("font-size", "70px");
  // $("#about-div").css("padding", "15% 0 8% 0");
  // $("#about-text-div").css("margin", "5% 25%");
  //work
  $(".work-div").css("width", "75%");
  $(".work-div").css("margin", "0 2%");
  $(".exp-title").css("font-size", "0.8em");
  $(".work-title").css("font-size", "20px");
  $("#gov-title").html("SOFTWARE SYSTEMS <br>DEVELOPER");
  $("#bell-title").html("NETWORK APPLICATIONS <br>ARCHITECT");
  $("#dfatd-title").html("INTERNETWORKING <br>ANALYST");
  //education
  $(".education-div").css("width", "75%");
  $("#awards-div").css("flex-direction", "column");
  $("#awards-div").css("align-items", "center");
  //projects
  $(".projects-col-container").css("flex-direction", "column");
  $(".projects-col-container").css("align-items", "center");
  $("#projects-div").css("padding", "10% 10%");
  $("#projects-subscript").css("padding-bottom", "0");
  $("#projects-subscript").css("font-size", "20px");
  //contact
  $("#contact-subheader").css("font-size", "20px");
  $(".contact-div").css("width", "75%");
  $(".contact-info").css("font-size", "0.7em");
  $("#copyright-text").css("font-size", "0.7em");
}

function screenBiggerThan1400() {
  $("h4").css("font-size", "22px");
  //mininav
  $("body").css("overflow", "auto");
  $("#nav-container").css("display", "none");
  $("#mininav-div a").css("display", "none");
  $("#mininav-div").css("display", "none");
  //navigation
  $("#mininav-menu-button-img").css("display", "none");
  $("#nav-icon").addClass("nav-left");
  $("#nav-icon").removeClass("nav-center");
  $("#top-nav").css("display", "block");
  $(".nav-items").css("display", "block");
  //intro
  $("#intro-div").css("min-height", "55vh");
  $("#intro-title").css("font-size", "50px");
  // $("#intro-downarrow").css("display", "none");
  $("#intro-downarrow").css("padding", "10% 0 0 0");
  //about
  // $("#small-whale-text").css("font-size", "12px");
  // $("#about-text-div").css("margin", "5% 32%");
  // $("#about-text").css("font-size", "70px");
  // $("#about-div").css("padding", "10% 0 3% 0");
  //work
  $(".work-div").css("width", "27%");
  $(".work-div").css("margin", "0 2%");
  $(".exp-title").css("font-size", "0.8em");
  $(".work-title").css("font-size", "25px");
  $("#gov-title").html("SOFTWARE SYSTEMS <br>DEVELOPER");
  $("#bell-title").html("NETWORK APPLICATIONS <br>ARCHITECT");
  $("#dfatd-title").html("INTERNETWORKING <br>ANALYST");
  //education
  $(".education-div").css("width", "100%");
  $("#awards-div").css("flex-direction", "row");
  $("#awards-div").css("align-items", "baseline");
  //projects
  $(".projects-col-container").css("flex-direction", "row");
  $(".projects-col-container").css("align-items", "flex-start");
  $("#projects-div").css("padding", "10% 5%");
  $("#projects-subscript").css("padding-bottom", "0");
  $("#projects-subscript").css("font-size", "20px");
  //contact
  $("#contact-subheader").css("font-size", "20px");
  $(".contact-div").css("width", "100%");
  $(".contact-info").css("font-size", "0.8em");
  $("#copyright-text").css("font-size", "0.8em");
}
