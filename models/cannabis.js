module.exports = function(sequelize, DataTypes) {
//this is where Im creating a new table called Cannabis and assigning it the proper colums I want.
    var Cannabis = sequelize.define("Cannabis", {
        strainName: DataTypes.STRING,
        color: DataTypes.STRING,
        desc: DataTypes.STRING,
        flavor: DataTypes.STRING,
        pricePerGram: DataTypes.INTEGER,
        percentOfTHC: DataTypes.DECIMAL(10,2),
        percentOfCBD: DataTypes.DECIMAL(10,2)
    }, {
        timestamps: false
    })

    Cannabis.associate = function(models) {
        // add associations here
        // ex:User.hasMany(models.BlogPost);
        Cannabis.belongsToMany(models.Cart, {through: "CartCannabis"})
        
    };

    return Cannabis
}



//in SQL this would look like 

// CREATE TABLE Cannabis (
//     id int NOT NULL AUTO_INCREMENT,
//     name varchar(30) NOT NULL,
//     type varchar(30) NOT NULL
//   );
