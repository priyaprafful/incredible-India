const mongoose = require("mongoose");

const City = require("../models/city-model");

mongoose
  .connect('mongodb://localhost/incredible-india', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

  const cityData =[
    {
      name: "The Place of Suicidal Birds in Jatinga, Assam",
      description:" During dark and foggy nights in monsoons, migratory birds flying over the village, dive headlong into trees, buildings, poles, and what nots, crashing to death. Jatinga is one of those strange places to visit in India that turns into a land of mass bird suicide every year during September & October",
      placeCategory:"Mysterious",
      images: ["https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2015/12/jatinga-assam.jpg"]
    },
    {
    name: "Hawa Mahal, Jaipur",
    description:"The Hawa Mahal Jaipur is the beautiful many windowed extension of the City Palace that is said to resemble the honeycomb structure of a bee’s nest. Since the construction of the Hawa Mahal Jaipur in 1799 the building has become the iconic structure of the city and the pink sandstone palace is considered as the finest example of Rajput architecture.",
   placeCategory:"Historical",
    images:["https://www.tourmyindia.com/images/hawa-mahal-fort-jaipur3.jpg",
            "https://www.tourmyindia.com/images/hawa-mahal-fort-jaipur3.jpg"
    ]
  },

  ]

  City.create(cityData)
  .then(cityResults=>{
    console.log(`Inserted ${cityResults.length} City`);

  })
  .catch(err =>{
    console.log("inserted failure",err);
  })