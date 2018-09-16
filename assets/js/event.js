$(document).ready(function(){
        $("#formid").on('submit', function(){
            var title = !$("#event-title").val() ? false : $("#event-title").val();
            var date = !$("#date").val() ? false : $("#date").val();
            var time = !$("#time").val() ? false : $("#time").val();
            var email = !$("#email").val() ? false : $("#email").val();
            var location = !$("#location").val() ? false : $("#location").val();
            var eventDescription = !$("#event-description").val() ? false : $("#event-description").val();
            var transitOption = !$("#transit-option").val() ? false : $("#transit-option").val();
            var transitOrganized = !$("#transit-organized").val() ? false : $("#transit-organized").val();
            var accessible = !$("#accessible").val() ? false : $("#accessible").val();
            var gnBathroom = !$("#gn-bathroom").val() ? false : $("#gn-bathroom").val();
            var accessibilityRoadblock = !$("#accessibility-roadblock").val() ? false : $("#accessibility-roadblock").val();
            var eventCost = !$("#event-cost").val() ? false : $("#event-cost").val();
            var food = !$("#food").val() ? false : $("#food").val();
            var dietaryRestriction = !$("#dietary-restriction").val() ? false : $("#dietary-restriction").val();
            var foodAllergy = !$("#food-allergy").val() ? false : $("#food-allergy").val();
            var membersDietaryRestrictions = !$("#members-dietary-restrictions").val() ? false : $("#members-dietary-restrictions").val();
            var addressedFood = !$("#addressed-food").val() ? false : $("#addressed-food").val();
            var promoted = !$("#promoted").val() ? false : $("#promoted").val();
            var announced = !$("#announced").val() ? false : $("#announced").val();
        $.ajax({
            method: 'POST',
            url: 'https://bllvi5u5fc.execute-api.us-east-1.amazonaws.com/prod/event',
            data: JSON.stringify(
                {'EventTitle': title,
                 'Date': date,
                 'Time': time,
                 'Location': location,
                 'Email': email,
                 'EventDescription': eventDescription,
                 'TransitOption': transitOption,
                 'TransitOrganized': transitOrganized,
                 'Accessible': accessible,
                 'GnBathroom': gnBathroom,
                 'AccessibilityRoadblock': accessibilityRoadblock,
                 'EventCost': eventCost,
                 'Food': food,
                 'DietaryRestriction': dietaryRestriction,
                 'FoodAllergy': foodAllergy,
                 'MembersDietaryRestrictions': membersDietaryRestrictions,
                 'AddressedFood': addressedFood,
                 'Promoted': promoted,
                 'Announced': announced
             }),
            type: 'post',
            contentType: 'application/json',
            success: function completeRequest(result) {
                console.log('we good');
                window.location='index.html'
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