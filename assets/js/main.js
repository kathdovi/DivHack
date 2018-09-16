let sidebar = $('#sidebar-wrapper');
$('.navbar-toggler').click(function () {
    event.preventDefault();
    if (sidebar.hasClass('sidebar-out')) {
        console.log("this")
        // slide in
        sidebar.css({
            "left": "0px",
            "width": "250px",
            "transition": "all 0.4s ease 0s",
        });
        $('#sidebar-wrapper').removeClass("sidebar-out");
    } else {
        console.log("that")
        // slide out
        sidebar.css({
            "left": "250px",
            "width": "250px",
            "transition": "all 0.4s ease 0s",
        });
        $('#sidebar-wrapper').addClass("sidebar-out");
    }
    console.log($(".page").css("left") == "0px");
});

function myFunction(x) {
    if (x.matches) { // If media query matches
        // slide in
        sidebar.css({
            "left": "0px",
            "width": "250px",
            "transition": "all 0.4s ease 0s",
        });
        $('#wrapper').css({"padding": "0"});
        if (sidebar.hasClass('sidebar-out')) {
            $('#sidebar-wrapper').removeClass("sidebar-out");
        }
        $('.navbar-expand-lg').addClass("sticky");
        $('#wrapper').addClass("sticky-offset");
        $('#sidebar-img').addClass("hide-logo");
        $('.sidebar-nav').addClass("hide-padding");
 
    } else {
        // slide out
        $('#wrapper').css({ "padding-left": "250px" })
        sidebar.css({
            "left": "250px",
            "width": "250px",
            "transition": "all 0.4s ease 0s",
        });
        $('#sidebar-wrapper').addClass("sidebar-out");
        $('.navbar-expand-lg').removeClass("sticky"); 
        $('#wrapper').removeClass("sticky-offset");
        $('#sidebar-img').removeClass("hide-logo");
        $('.sidebar-nav').removeClass("hide-padding");

    }
}

let x = window.matchMedia("(max-width: 767px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes