$(document).ready(function() {

$(".cartbtn").click(function(){
 productId = $(this).attr("data-productid");
 console.log("ID", productId)

 $.ajax({
    url: '/cart/' + productId,
    type: 'PUT'
    }).then(function(data){
        console.log(data, "added")
    })
});
})
