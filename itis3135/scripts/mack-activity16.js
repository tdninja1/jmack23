$(document).ready(function(){
    var url = "https://api.flickr.com/services/feeds/photos_public.gne?" 
        + "id=82407828@N07&format=json&jsoncallback=?&tags=vectacorpbuilding";

        $.getJSON(url, function(data) {
            var html = "";

            $.each(data.items, function(i, item) {
                // html += "<h3>" + item.title + "</h3>";
                // html += item.description; //displays photo, and descriptive text for the photo
                // html += item.media.m; //photo url

                html += "<img src=" + item.media.m + ">"; //holds collection of urls for all photos
               

                //Remove first paragraph of the description
                // html = html.replace
                // (//start html.replace
                //      "<p><a href=\ " //add an image element
                //     + 
                //     'http://www.flickr.com/people/' 
                //      +
                //      "82407828@N07/\"zakruvalcaba<\/a>" 
                //     +
                //     " posted a photo:<\/p>", ""
                //     )//end html.replace
                
            });
            $("#new_building").html(html);
            

        });

});