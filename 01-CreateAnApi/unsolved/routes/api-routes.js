var db = require("../models")

module.exports = function(app){
    app.get("/api/all", function(req,res){
        db.DICTIONARIES.findAll({}).then(function(result){
            res.json(result)
        })
    })
    app.delete("/api/delete/:id",function(req,res){
        console.log("deleting")
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
}