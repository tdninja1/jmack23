//AJAX REQUEST HOME PAGE
/*
{
  "home": [
    {
      "description": "Welcome Angie's Delights. Here, you can find anything and everything bakery related that we have listed. Only the most delightful products are listed on our page. Enjoy!"
    }
  ]
}

*/
$(document).ready(function() {
    $.ajax({
        type: "get",
        url: "json_files/home.json", //CHANGED FROM "xml" TO "json"
        beforeSend: function() {
            $("#home").html("Loading...");
        },
        timeout: 10000,
        error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json", //CHANGED FROM "xml" TO "json"
        success: function(data) {
            $("#home").html("");
        
            //JSON UNDER
            $.each(data, function() {
                $.each(this, function(key, value) {
                    $('#home').append(
                        '<p>' + value.description + '</p>'
                    );
                });
            });
        }
    });
});
