// const express = require("express");

// const router = express.Router();

// const City = require("../models/city-model.js");

// router.get("/mysteriousplaces",(req,res,next)=>{
//   City.find({placeCategory:{$eq:'Mysterious'}})
//   //City.find()
//   .then(mysteriousresults =>{
//     //res.send(mysteriousresults)
//     res.locals.mysArray =mysteriousresults;
//     res.render("mys-list.hbs")
//   })

//   .catch(err=>next(err));
  
// });


// router.get("/historicalplaces",(req,res,next)=>{
//   City.find({placeCategory:{$eq:'Historical'}})
//   .then(historicalresults =>{
//     res.locals.hisArray =historicalresults;
//     res.render("his-list.hbs")
//   })

//   .catch(err=>next(err));
  
// });


// router.get("/city/:cityId",(req,res,next)=>{
//   const {cityId} = req.params;

//   City.findById(cityId)
//   .then(cityDoc =>{
//     //res.send(cityDoc)
//     res.locals.myCity = cityDoc;
//     res.render("place-detail.hbs");
//   })
//   .catch(err=>next(err));
// })


// module.exports = router;

//City.find().populate({path:"", match:{"placeCategory":"Mysterious"}})
  //City.fine().where('placeCategory').in(['Mysterious'])
  