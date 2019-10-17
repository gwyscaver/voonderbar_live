var cartRouter = require("express").Router();
var models = require("../models");

cartRouter.route("/checkout")
.get(function(req, res){
    models.Cart.findOne({
        where: {
            UserId:req.session.user.id,
            status:true
        },include:[models.Cannabis,models.Wine]
    }).then(function(cart){
        // res.json(cart);
     res.render("cart", cart) 

    })
})

.delete(function(req, res){
    models.Cart.destroy({
        where: {

            UserId: req.session.user.id,
            status:true

    }
}).then(function(data){
    res.json(data)
})
});


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
        models.Cart.findAll({include:[models.Cannabis,models.Wine,models.User]}).then(carts=>{
            res.json(carts)
        })
    })
    

cartRouter.put('/cannabis/:ProductId',function(req, res){
    models.Cart.findOrCreate({
        where: {  
           
                UserId: req.session.user.id ,
                status: true 
            
        }
    }).then(function(inProgressCart){
        // res.send(inProgressCart)
       inProgressCart[0].addCannabis(req.params.ProductId)
       res.json({sucess: true})
       
    })
    .catch(function(err){
        console.log("error updating new cart ", err)
        res.json({sucess: false})
    })
})
cartRouter.put('/wine/:ProductId',function(req, res){
    models.Cart.findOrCreate({
        where: {  
           
                UserId: req.session.user.id ,
                status: true 
            
        }
    }).then(function(inProgressCart){
        // res.send(inProgressCart)
       inProgressCart[0].addWine(req.params.ProductId)
       res.json({sucess: true})
       
    })
    .catch(function(err){
        console.log("error updating new cart ", err)
        res.json({sucess: false})
    })
})

    module.exports = cartRouter;