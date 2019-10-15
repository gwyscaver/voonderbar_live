var cartRouter = require("express").Router();
var models = require("../models");

cartRouter.route("/checkout")
.get(function(req, res){
    res.render("cart")
})

cartRouter.route("/")
    .post(function(req, res){
        console.log(req.session)
        models.Cart.create({

            items:  req.body.items,
            status: req.body.status,
            UserId:req.session.user.id

        })
        .then(function(data){
            res.json({sucess: true})
        })
        .catch(function(err){
            console.log("error creating new cart:  ", err)
            res.json({sucess: false})
        })

    })
    .get(function(req, res){
        models.Cart.findAll({include:[models.Cannabis,models.User]}).then(carts=>{
            res.json(carts)
        })
    })
    

cartRouter.put('/:productId',function(req, res){
    models.Cart.findOrCreate({
        where: {  
           
                UserId: req.session.user.id ,
                status: true 
            
        }
    }).then(function(inProgressCart){
        // res.send(inProgressCart)
       inProgressCart[0].addCannabis(req.params.productId)
       res.json({sucess: true})
       
    })
    .catch(function(err){
        console.log("error updating new cart ", err)
        res.json({sucess: false})
    })
})

    module.exports = cartRouter;