var db = require("../models");

module.exports = function(app) {
  // Find all Authors and return them to the user with res.json
  app.get("/main", function(req, res) {
    if(!req.session.user){
      res.redirect('/login')
    }
    else {

    db.Cannabis.findAll({where:{color:"sativa"}}).then(function(sativaStrains) {

      db.Cannabis.findAll({where:{color:"indica"}}).then(function(indicaStrains){

        db.Cannabis.findAll({where:{color:"hybrid"}}).then(function(hybridStrains){

        db.Wine.findAll({where:{color:"red"}}).then(function(redWine){

        db.Wine.findAll({where:{color:"white"}}).then(function(whiteWine){
            var hbsObject = { 
              indica:indicaStrains,
              sativa:sativaStrains,
              hybrid:hybridStrains,
              red: redWine,
              white: whiteWine,
              name:req.session.user.name
            };

            
             res.render("securepage", hbsObject);
          });
        })
          });
        })
      }) 
      // db.Wine.findAll()   

  }
  });

  app.get("/checkage", function (req, res) {
    res.render("gateway")
  })

}