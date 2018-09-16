$(document).ready(function () {
    var showData = $('#show-data');

    $.getJSON('https://bllvi5u5fc.execute-api.us-east-1.amazonaws.com/prod/event', function (data) {
      console.log(data.body);
      var obj = jQuery.parseJSON( data.body );

      $.each(obj, function(i, item) {

    		console.log(item.EventTitle);
        for (key in item) {
          console.log('oh hi');
          console.log(key);
          if (item[key] === false) {
              console.log('need to do this');
              var row = '<label><input type="checkbox"> '+item.EventTitle+': '+ key+'</label><br><br>'
              $('#show-data').append(row);
          }
        }
	  });
    });

   
});