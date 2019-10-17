console.log("hello")

$("#ageyes").on("click", function(event){
    event.preventDefault()
    console.log("person is of age")
    window.location.replace ("http://localhost:8080") //https://voonderbar.herokuapp.com/
})

$("#ageno").on("click", function(event){
    event.preventDefault()
    console.log("person is not of age")
    // window.history.back ()
    window.location.replace ("https://www.google.com") 
})
