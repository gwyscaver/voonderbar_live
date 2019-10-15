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
            var hbsObject = { 
              indica:indicaStrains,
              sativa:sativaStrains,
              hybrid:hybridStrains,
              name:req.session.user.name
            };

            console.log(hbsObject)
            res.render("securepage", hbsObject);
            
          });
        })
      }) 
      // db.Wine.findAll()   

  }
  });

}