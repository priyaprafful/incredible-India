const express = require("express");

const router = express.Router();

const City = require("../models/city-model.js");
const Food = require("../models/food-model.js");
const Culture = require("../models/culture-model.js");

router.get("/mysteriousplaces", (req, res, next) => {
  City.find({ placeCategory: { $eq: "Mysterious" } })
    //City.find()
    .then(mysteriousresults => {
      //res.send(mysteriousresults)
      res.locals.mysArray = mysteriousresults;
      res.render("mys-list.hbs");
    })

    .catch(err => next(err));
});

router.get("/historicalplaces", (req, res, next) => {
  City.find({ placeCategory: { $eq: "Historical" } })
    .then(historicalresults => {
      res.locals.hisArray = historicalresults;
      res.render("his-list.hbs");
    })

    .catch(err => next(err));
});

router.get("/food", (req, res, next) => {
  Food.find({ category: { $eq: "Food" } }).then(foodresults => {
    // res.send(foodresults);
    res.locals.foodArray = foodresults;
    res.render("food-list.hbs");
  });
});
router.get("/historicalplaces", (req, res, next) => {
  City.find({ placeCategory: { $eq: "Historical" } })
    .then(historicalresults => {
      res.locals.hisArray = historicalresults;
      res.render("his-list.hbs");
    })

    .catch(err => next(err));
});

router.get("/culture", (req, res, next) => {
  Culture.find({ category: { $eq: "Culture" } })
    .then(cultureresults => {
      res.locals.cultureArray = cultureresults;
      res.render("festival-list.hbs");
    })

    .catch(err => next(err));
});

router.get("/bestplaces", (req, res, next) => {
  City.find({ placeCategory: { $eq: "BestPlaces" } })
    .then(bestplaceresults => {
      res.locals.bestPlacesArray = bestplaceresults;
      res.render("bestplaces-list.hbs");
    })
    .catch(err => next(err));
});

router.get("/trekkingplaces", (req, res, next) => {
  City.find({ placeCategory: { $eq: "Trekking" } }).then(
    trekkingplaceResults => {
      res.locals.trekkingplacesArray = trekkingplaceResults;
      res.render("trekkingplace-list.hbs");
    }
  );
});
module.exports = router;

router.get("/city/:cityId", (req, res, next) => {
  const { cityId } = req.params;

  City.findById(cityId)
    .then(cityDoc => {
      //res.send(cityDoc)
      res.locals.myCity = cityDoc;
      res.render("place-detail.hbs");
    })
    .catch(err => next(err));
});

router.get("/bestplaces/:bestplacesId", (req, res, next) => {
  const { bestplacesId } = req.params;

  City.findById(bestplacesId)
    .then(bestPlaceDoc => {
      //res.send(cityDoc)
      res.locals.myBestPlace = bestPlaceDoc;
      res.render("bestplace-detail.hbs");
    })
    .catch(err => next(err));
});

router.get("/trekkingplaces/:bestplacesId", (req, res, next) => {
  const { bestplacesId } = req.params;

  City.findById(bestplacesId)
    .then(trekkingPlaceDoc => {
      //res.send(cityDoc)
      res.locals.mytrekkingPlace = trekkingPlaceDoc;
      res.render("trekkingplace-detail.hbs");
    })
    .catch(err => next(err));
});

module.exports = router;
