$(document).ready(function(){
        $("#formid").on('submit', function(){
            var title = $("#event-title").val();
            var date = $("#date").val();
            var time = $("#time").val();
            var location = $("#location").val();
        $.ajax({
            method: 'POST',
            url: 'https://bllvi5u5fc.execute-api.us-east-1.amazonaws.com/prod/event',
            data: JSON.stringify(
                {'EventTitle': title,
                 'Date': date,
                 'Time': time,
                 'Location': location}),
            type: 'post',
            contentType: 'application/json',
            success: function completeRequest(result) {
                console.log('we good');
            },
            error: function ajaxError(jqXHR, textStatus, errorThrown) {
                console.error('Error creating event: ', textStatus, ', Details: ', errorThrown);
                console.error('Response: ', jqXHR.responseText);
                alert('An error occured when creating event:\n' + jqXHR.responseText);
            }
       });
    return false;
    });
});