$(document).ready(function () {

    $.getJSON('https://bllvi5u5fc.execute-api.us-east-1.amazonaws.com/prod/event', function (data) {
      console.log(data.body);
      var obj = jQuery.parseJSON( data.body );

      $.each(obj, function(i, item) {
        
    		console.log(item.EventTitle);
        var row = '<h3 class="subhead"><a href="checklist.html">Plan '+item.EventTitle+'</a></h3><ul class="event-info">'
        $('#show-todo-boxes').append(row);
        for (key in item) {
          if (item[key] === false) {
              console.log('need to do this');
              $('#show-todo-boxes').append('<li>'+key+'</li>');
          }
        }
        $('#show-todo-boxes').append('</ul><br>');
	  });
    });
});