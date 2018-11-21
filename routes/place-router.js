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

router.get("/mysteriousplaces/:mysteriousplacesId", (req, res, next) => {
  const { mysteriousplacesId } = req.params;

  City.findById(mysteriousplacesId)
    .then(mysteriouscityDoc => {
      //res.send(cityDoc)
      res.locals.mymysteriousplaces = mysteriouscityDoc;
      res.render("mysteriousplaces-detail.hbs");
    })
    .catch(err => next(err));
});

router.get("/historicalplaces/:historicalplacesId", (req, res, next) => {
  const { historicalplacesId } = req.params;

  City.findById(historicalplacesId)
    .then(historicalplacesDoc => {
      //res.send(cityDoc)
      res.locals.myhistoricalplaces = historicalplacesDoc;
      res.render("historicalplaces-detail.hbs");
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

router.get("/trekkingplaces/:trekkingplacesId", (req, res, next) => {
  const { trekkingplacesId } = req.params;

  City.findById(trekkingplacesId)
    .then(trekkingPlaceDoc => {
      //res.send(cityDoc)
      res.locals.mytrekkingPlace = trekkingPlaceDoc;
      res.render("trekkingplace-detail.hbs");
    })
    .catch(err => next(err));
});

router.get("/food/:foodId", (req, res, next) => {
  const { foodId } = req.params;

  Food.findById(foodId)
    .then(foodDoc => {
      res.locals.myFoods = foodDoc;
      res.render("food-detail.hbs");
    })
    .catch(err => next(err));
});

router.get("/culture/:cultureId", (req, res, next) => {
  const { cultureId } = req.params;
  Culture.findById(cultureId)
    .then(cultureDoc => {
      res.locals.myculture = cultureDoc;
      res.render("culture-detail.hbs");
    })
    .catch(err => next(err));
});

router.post(
  "/trekkingplaces/:trekkingplacesId/process-review",
  (req, res, next) => {
    const { trekkingplacesId } = req.params;
    const { firstName, comments } = req.body;
    City.findByIdAndUpdate(
      trekkingplacesId,
      { $push: { reviews: { firstName, comments } } },
      { runValidators: true }
    )
      .then(bookDoc => {
        // res.locals.mytrekkingPlace = bookDoc;
        // res.send(bookDoc);
        res.redirect(`/trekkingplaces/${trekkingplacesId}`);
      })
      .catch(err => next(err));
  }
);

router.post("/bestplaces/:bestplacesId/process-review", (req, res, next) => {
  const { bestplacesId } = req.params;
  const { firstName, comments } = req.body;
  City.findByIdAndUpdate(
    bestplacesId,
    { $push: { reviews: { firstName, comments } } },
    { runValidators: true }
  )
    .then(bookDoc => {
      res.redirect(`/bestplaces/${bestplacesId}`);
    })
    .catch(err => next(err));
});

router.post(
  "/mysteriousplaces/:mysteriousplacesId/process-review",
  (req, res, next) => {
    const { mysteriousplacesId } = req.params;
    const { firstName, comments } = req.body;
    City.findByIdAndUpdate(
      mysteriousplacesId,
      { $push: { reviews: { firstName, comments } } },
      { runValidators: true }
    )
      .then(bookDoc => {
        res.redirect(`/mysteriousplaces/${mysteriousplacesId}`);
      })
      .catch(err => next(err));
  }
);

router.post(
  "/historicalplaces/:historicalplacesId/process-review",
  (req, res, next) => {
    const { historicalplacesId } = req.params;
    const { firstName, comments } = req.body;
    City.findByIdAndUpdate(
      historicalplacesId,
      { $push: { reviews: { firstName, comments } } },
      { runValidators: true }
    )
      .then(bookDoc => {
        res.redirect(`/historicalplaces/${historicalplacesId}`);
      })
      .catch(err => next(err));
  }
);

router.post("/food/:foodId/process-review", (req, res, next) => {
  const { foodId } = req.params;
  const { firstName, comments } = req.body;
  Food.findByIdAndUpdate(
    foodId,
    { $push: { reviews: { firstName, comments } } },
    { runValidators: true }
  )
    .then(bookDoc => {
      res.redirect(`/food/${foodId}`);
    })
    .catch(err => next(err));
});

router.post("/culture/:cultureId/process-review", (req, res, next) => {
  const { cultureId } = req.params;
  const { firstName, comments } = req.body;
  Culture.findByIdAndUpdate(
    cultureId,
    { $push: { reviews: { firstName, comments } } },
    { runValidators: true }
  )
    .then(bookDoc => {
      res.redirect(`/culture/${cultureId}`);
    })
    .catch(err => next(err));
});
module.exports = router;
