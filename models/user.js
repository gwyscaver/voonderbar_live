module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define('User', {
        name: {
            type:DataTypes.STRING,
            allowNull:false,
            unique:true
          },
          password: {
            type:DataTypes.STRING,
            allowNull:false,
            validate:{
                len:[8]
            }
        }
    });

    User.associate = function(models) {
        // add associations here
        // ex:User.hasMany(models.BlogPost);
        User.hasMany(models.Cart)
        
    };

    

    return User;
};