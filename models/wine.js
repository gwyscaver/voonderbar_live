module.exports = function(sequelize, DataTypes) {
    //this is where Im creating a new table called Cannabis and assigning it the proper colums I want.
        var Wine = sequelize.define("Wine", {
            color: DataTypes.STRING,
            varietal: DataTypes.STRING,
            flavor: DataTypes.STRING,
            pricePerBottle: DataTypes.INTEGER,
            alcoholPercent: DataTypes.DECIMAL(10,2),
        
        }, {
            timestamps: false
        })
        return Wine
    }