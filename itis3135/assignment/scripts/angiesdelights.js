//Ideas for JS Functions
/*
1.) Preload images to website
2.) Image Slideshow
3.) Random Item Picker from 10 listed items
*/
//AJAX FAVORITE PRODUCTS

/*
{"favproducts":[
	{
		"image": "images/1.jpg",
		"name": "Delightful Cocoa Bombs",
		"description": "Simply drop the Cocoa Bomb into a glass of hot milk and watch in amazement as the delightful cocoa bomb transforms your hot glass of milk into an extremely decadent glass of hot cocoa.",
	},
*/
$(document).ready(function() {
    $.ajax({
        type: "get",
        url: "json_files/favProducts.json", //CHANGED FROM "xml" TO "json"
        beforeSend: function() {
            $("#faculty").html("Loading...");
        },
        timeout: 10000,
        error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json", //CHANGED FROM "xml" TO "json"
        success: function(data) {
            $("#fav_products").html("");
        
            //JSON UNDER
            $.each(data, function() {
                $.each(this, function(key, value) {
                    $('#faculty').append(
                        // "<img src=' " + value.image + " '> </img>" +
                        '<h2>' + value.name + '</h2>' + 
                        '<p>' + value.description + '</p>'
                    );
                });
            });
        }
    });
});



//Image Slideshow works with bxSlider plugin - JQUERY PLUGIN
$(document).ready(function(){
    $('.slider').bxSlider( {
        preloadImages :         'all', //preload images
        randomStart :           true, //random starting slide
        auto :                  true, //infinite transitions
        setInterval :           2000, // 2 seconds
        mode:                   'horizontal', //slide horizontally
        touchEnabled :          false,
        autoHover :             true, //if user hovers over slide, pause
        wrapperClass :          'bx-wrapper',
        slideWidth :            250

    });


  });

//declare randomProduct array
function randomProduct() 
{
    var myRandomProductArray = ["Delightful Cocoa Bombs", "Chocolate Orange Cake", "Gingerbread Man Cake", 
                                "Fathers Special Vanilla Business Cake", "Pink Velvet Flamingo Cake", "Pink Velvet Flower Cake", 
                                "Easter Bunny Cake", "Doughnut Cake", "Mexican Cake", "Chocolate Covered Strawberries"
                            ];
    //next get random number by creating a variable named randomProductItem and set that equal to the 
    //Math.floor(Math.random() function multiplied by the array's length 
    var randomProductItem = myRandomProductArray[Math.floor(Math.random() * myRandomProductArray.length)];
    //and set the innerHTML to the var created
    document.getElementById("randomProduct").innerHTML = randomProductItem;
}

//useful to load images before site is seen
function preloader() {
    //counter
    var j = 0;

    //need imageObject
    imageObj = new Image();

    imagesTwo = new Array();
    imagesTwo[0] = "images/1.jpg", imagesTwo[1] = "images/3.jpg"
    imagesTwo[2] = "images/5.jpg", imagesTwo[3] = "images/7.jpg";
    
    for (j = 0; j <= 3; j++) {
        imageObj.src=images[i];
    }
}

