/*
{"facultymembers":[
	{
		"full_name": "Debarati Basu",
		"first_name": "Debarati",
		"image": "faculty/Dr.Basu.png",
		"department": "Software and Information Systems",
		"bio": "Assistant Teaching Professor"
	},
*/

$(document).ready(function() {
    $.ajax({
        type: "get",
        url: "json_files/facultyList.json", //CHANGED FROM "xml" TO "json"
        beforeSend: function() {
            $("#faculty").html("Loading...");
        },
        timeout: 10000,
        error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json", //CHANGED FROM "xml" TO "json"
        success: function(data) {
            $("#faculty").html("");
        
            //JSON UNDER
            $.each(data, function() {
                $.each(this, function(key, value) {
                    $('#faculty').append(
                        "<img src=' " + value.image + " '> </img>" +
                        '<h2>' + value.full_name + '</h2>' + 
                        '<h3>' + value.department + '</h3>' +
                        '<p>' + value.bio + '</p>'
                    );
                });
            });
        }
    });
});