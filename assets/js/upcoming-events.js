$(document).ready(function () {
    var showData = $('#show-data');

    $.getJSON('https://bllvi5u5fc.execute-api.us-east-1.amazonaws.com/prod/event', function (data) {
      console.log(data.body);
      var obj = jQuery.parseJSON( data.body );

      $.each(obj, function(i, item) {
      		console.log('yayyy');
    		console.log(item.EventTitle);
    		var row = '<h3 class="subhead">'+item.EventTitle+'</h3><ul class="event-info"><li>Date: '+item.Date+'</li><li>Time: '+item.Time+'</li><li>Location: '+item.Location+'</li></ul><br>'
    		$('#show-data').append(row);
	  });
    });

   
});