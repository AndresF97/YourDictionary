//call for the express npm package
var express = require("express")

//save the xpress function inside a var
var app = express()

//set a port to listen in
var PORT = process.env.PORT || 8080;

var db = require("./models")

//
app.use(express.urlencoded({extended: true}))
app.use(express.json());

app.use(express.static("public"))
//requiring api routes
require("./routes/api-routes")(app);

db.sequelize.sync().then(function(){
   app.listen(PORT, function(){
        console.log("App listening in "+ PORT)
    })
})
