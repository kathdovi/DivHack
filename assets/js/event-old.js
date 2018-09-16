(function eventWrapper($) {

    function createEvent() {
        var formData = $("#my-form");
        alert(formData)
        
        var values = {};
        $.each($('#my-form').serializeArray(), function(i, field) {
            values[field.name] = field.value;
        });

        $.ajax({
            method: 'POST',
            url: _config.api.invokeUrl + '/event',
            data: JSON.stringify(formData.serializeArray()),
            contentType: 'application/json',
            success: completeRequest,
            error: function ajaxError(jqXHR, textStatus, errorThrown) {
                console.error('Error creating event: ', textStatus, ', Details: ', errorThrown);
                console.error('Response: ', jqXHR.responseText);
                alert('An error occured when creating event:\n' + jqXHR.responseText);
            }
        });
    }

    function completeRequest(result) {
        var event;
        console.log('Response received from API: ', result);
        event = result.Event;
        console.log(event);
        $('#request').text('Event saved');
    }

    // Register click handler for #create-event button
    $(function onDocReady() {
        $('#create-event').click(handleCreateEventClick);
    });

    function handleCreateEventClick(event) {
        createEvent();
    }

}(jQuery));