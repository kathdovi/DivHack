$('.menubutton').toggle(function () {
    $('#A').animate({ width: 0 });
    $('#B').animate({ left: 0 });
}, function () {
    $('#A').animate({ width: 200 });
    $('#B').animate({ left: 200 });
})