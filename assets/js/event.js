(function eventWrapper($) {

    function submitform(){
        var formData = JSON.stringify($("#event-form").serializeArray());
        alert(formData);
        $.ajax({
          type: "POST",
          url: _config.api.invokeUrl + '/event',
          data: formData,
          success: function(){},
          dataType: "json",
          contentType : "application/json"
        });

}(jQuery)});
