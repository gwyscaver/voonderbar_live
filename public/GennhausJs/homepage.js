$(document).ready(function() {
var cartNum = $("#cartnum")

<<<<<<< HEAD
$(".cartbtn").click(function(){
 productId = $(this).attr("data-productid");
=======
var weedCount = $("#weedsContainer").children().length;
var wineCount = $("#winesContainer").children().length;

var total = weedCount + wineCount;
console.log(total);
cartNum.text(total);

$(".cannabis").click(function(){
var productId = $(this).attr("data-productid");
>>>>>>> e1ae57c312a27f19c0d26c402df5744c940cf1a3
 console.log("ID", productId)

 $.ajax({
    url: '/cart/' + "cannabis/" + productId,
    type: 'PUT'
    }).then(function(data){
        console.log(data, "added")
        alert("product added to cart!")
        total++
        cartNum.text(total);
    })

});

$(".cartbtn").click(function(){
    
    var wineproductId = $(this).attr("data-productid");
    console.log("ID", wineproductId)
    
        
 $.ajax({
    url: '/cart/' + "wine/" + wineproductId,
    type: 'PUT'
    }).then(function(data){
        console.log(data, "added")
        alert("product added to cart!")
        console.log(data)
    })
    total++
    cartNum.text(total);
    

});

$("#clearButton").click(function(){

    $.ajax({
        url: '/cart/checkout',
        type: 'DELETE'
        }).then(function(data){

            console.log(data, "added")
            $("#weedsContainer").empty();
            $("#winesContainer").empty();
            total = 0;
            cartNum.text(total);


        })

})

})




