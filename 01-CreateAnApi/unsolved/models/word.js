module.exports = function(sequelize, DataTypes){
    var DICTIONARIES = sequelize.define("DICTIONARIES",{
        WORD:{
            type:DataTypes.STRING,
            len:[1,400]
         },
        MEANING:{
           type:DataTypes.STRING,
           len:[1,400]
        },
        createdAt:{
            type:DataTypes.STRING,
            len:[1,400]
        },
        updatedAt:{
            type:DataTypes.STRING,
            len:[1,400]
        }
    })
    return DICTIONARIES
}