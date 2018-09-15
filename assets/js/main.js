$('.navbar-toggler').click(function () {
    event.preventDefault();
    let sidebar = $('#sidebar-wrapper');
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