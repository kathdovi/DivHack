$(document).ready(function () {

    $.getJSON('https://bllvi5u5fc.execute-api.us-east-1.amazonaws.com/prod/event', function (data) {
      console.log(data.body);
      var obj = jQuery.parseJSON( data.body );

      $.each(obj, function(i, item) {
        
    		console.log(item.EventTitle);
        var row = '<h3 class="subhead"><a href="checklist.html">Plan '+item.EventTitle+'</a></h3><ul class="event-info"><p>'+item.EventDescription+'</p></ul><br>'
        $('#show-todo-boxes').append(row);
      
        $('#show-todo-boxes').append('<br>');
	  });
    });
});