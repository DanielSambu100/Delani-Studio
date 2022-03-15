$("#design").hide();
$("#development").hide();
$("#product").hide();

$(document).ready(function(){
    $("#design-image").click(function (){
        $("#design-image").hide();
        $("#design").show();
    });

    $("#design").click(function(){
        $("#design-image").toggle();
        $("#design").toggle();
    });
});

$(document).ready(function(){
    $("#development-image").click(function (){
        $("#development-image").hide();
        $("#development").show();
    });

    $("#development").click(function(){
        $("#development-image").toggle();
        $("#development").toggle();
    });
});

$(document).ready(function(){
    $("#product-image").click(function (){
        $("#product-image").hide();
        $("#product").show();
    });

    $("#product").click(function(){
        $("#product-image").toggle();
        $("#product").toggle();
    });
});