const mongoose =require("mongoose");

mongoose.connect("mongodb://localhost/articles-db")
.then(x => ("connected to mongo db"))
.catch(x => ("couldn't connect to db"));