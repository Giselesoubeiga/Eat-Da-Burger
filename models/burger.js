// import the ORM to create functions to interact with the DB
let orm = require("../config/orm");

let burger = {
    all: function(cb){
        orm.all("burgers", function(res){
            cb(res);
        });
    },
    create: function(cols, vals, cb){
        orm.create("burgers", cols, vals, function(res){
            cb(res);
        });
    },
    update: function(objcolVals, condition, cb){
        orm.update("burgers",objcolVals, condition, function(res){
            cb(res);
        });
    }
}

module.exports = burger;
