//------ JQuery ------\\
var fadeInElements = 5;
var display = false;

$(document).ready(function() {

    for (var i = 0; i < fadeInElements; i++) {
        $('#fadein' + i).hide();
    }

    for (var i = 0; i < fadeInElements; i++) {
        $('#fadein' + i).fadeIn(1800);
        $('#fadein' + i).css("display", "inline-block");
    }

    $("#dropdown").hide();

    if (innerWidth <= 750) {
        $("#shutter").hide();
        $("#shutter").fadeIn(1800);
    }
});

function menuDropdown() {
    if (display === false) {
        $("#dropdown").slideDown();
        display = true;
    }
    else {
        $("#dropdown").slideUp();
        display = false;
    }
}

function draw() {
    if (innerWidth > 750) {
        $("#shutter").css("display","none");
    }
    else if(innerWidth <= 750) {
        $("#shutter").css("display","block");
        $("#shutter").css("display","inline-block");
    }
}
