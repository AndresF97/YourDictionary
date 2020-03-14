var db = require("../models")

module.exports = function(app){
    //This cal will get the infromation from the MySQL that will get all seed/saved items  
    app.get("/api/all", function(req,res){
        //The findall({}), query will do all of the actions needed to get all the items from the DB
        db.DICTIONARIES.findAll({}).then(function(result){
            res.json(result)
        })
    })
    //This call will delete an item from the DB by 
    app.delete("/api/delete/:id",function(req,res){
        //The destroy query will pinpoint a place wherer you can delete an item by its id 
        db.DICTIONARIES.destroy({
            where:{
                id:req.params.id
            }
        }).then(function(results){
            res.json(results)
        }).catch(function(error){
            console.log(error)
        })
    })
    app.put("/api/word",function(req,res){
        db.DICTIONARIES.create({
            WORD:req.body.WORD,
            MEANING:req.body.MEANING,
            createdAt:req.body.createdAt,
            updatedAt:req.body.updatedAt
        }).then(function(result){
            console.log(result)
            res.json(result)
        }).catch(function(error){
            console.log(error)
        })
    })
}