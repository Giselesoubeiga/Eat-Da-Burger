let express = require("express");

let router = express.Router();

let burger = require("../models/burger");

//create all our routes
//get all
router.get("/", (req, res) => {
  burger.all(function(data) {
    let hbsObject = {
        burgers: data
      };
      console.log("Its working");
      console.log(hbsObject);
      res.render("index", hbsObject);
  });
});

//add burger
router.post("/api/burgers", (req, res) => {
  burger.create(["burger_name"], [req.body.name], function(result, err) {
    if (err) {
      console.log("create error :" + err);
    }
    res.json(result);
  });
});
//update buger
router.put("/api/burgers/:id", (req, res) => {
    let condition = "id = "+ req.params.id;
    console.log("condition to update :" + condition);

    burger.update({devoured: true}, condition, function(result, err) {
      if (err) {
        console.log("update error :" + err);
      }
      res.json(result);
    });
  });

  module.exports = router;
