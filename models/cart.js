module.exports = function(sequelize, DataTypes) {
    var Cart = sequelize.define('Cart', {
        status:  DataTypes.BOOLEAN
        
        
    });

    Cart.associate = function(models) {
        // add associations here
        Cart.belongsTo(models.User);
        Cart.belongsToMany(models.Cannabis,{through:"CartCannabis"});
        Cart.belongsToMany(models.Wine,{through:"CartWine"});
        
    };

    

    return Cart;
};