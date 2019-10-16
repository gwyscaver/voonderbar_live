$(document).ready(function() {

$(".cannabis").click(function(){
var productId = $(this).attr("data-productid");
 console.log("ID", productId)

 $.ajax({
    url: '/cart/' + "cannabis/" + productId,
    type: 'PUT'
    }).then(function(data){
        console.log(data, "added")
    })

    alert("product added to cart!")

});

$(".wine").click(function(){

 var wineproductId = $(this).attr("data-productid");
 console.log("ID", wineproductId)

 $.ajax({
    url: '/cart/' + "wine/" + wineproductId,
    type: 'PUT'
    }).then(function(data){
        console.log(data, "added")
    })

    alert("product added to cart!")

});
})



