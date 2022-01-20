const express = require("express");
const router = express.Router();
const authToken = require("../middleware");
const Resturant = require("../models/resturant");
var axios = require("axios").default;

router.post("/resturants", async (req, res, next) => {
  /*
    #swagger.tags = ['Resturants']
  */
  try {
    const { location } = req.body;
    // const location = "Jamshedpur"; //req.body;
    // plan A
    const dbResturants = await Resturant.find({
      location: location,
    });
    console.log(dbResturants);
    if (dbResturants.length > 0)
      return res.json({
        status: "DATABASE",
        data: dbResturants,
      });
    else {
      axios
        .request({
          method: "post",
          url: "https://worldwide-restaurants.p.rapidapi.com/typeahead",
          headers: {
            "content-type": "application/json",
            "x-rapidapi-host": "worldwide-restaurants.p.rapidapi.com",
            "x-rapidapi-key":
              "92fc611b58msh4d309de1c0de495p1d2e9cjsn476250195f6b",
          },
          data: { q: location, language: "en_US" },
        })
        .then(function (response) {
          console.log();
          // res.send(response.data.results.data[0].result_object.location_id);
          axios
            .request({
              method: "POST",
              url: "https://worldwide-restaurants.p.rapidapi.com/search",
              headers: {
                "content-type": "application/json",
                "x-rapidapi-host": "worldwide-restaurants.p.rapidapi.com",
                "x-rapidapi-key":
                  "0375a38a59msh966907970eb2c09p1fcaf8jsn35c93bc14c01",
              },
              data: {
                currency: "INR",
                location_id:
                  response.data.results.data[0].result_object.location_id,
                limit: "30",
                language: "en_US",
              },
            })
            .then(async (response) => {
              console.log();
              response.data.results.data.map(async (resturantItem) => {
                console.log(
                  "------------------------------------------------------"
                );
                console.log(location);
                console.log(
                  "------------------------------------------------------"
                );
                let ResturantResp = await Resturant.create({
                  name: resturantItem.name,
                  rating: resturantItem.rating,
                  type: resturantItem.ranking_category,
                  time: resturantItem.open_now_text,
                  rate: resturantItem.price,
                  imgSrc: resturantItem.photo
                    ? resturantItem.photo.images["original"].url
                    : "https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/9/2/8/5/235829-6-eng-GB/Feed-Test-SIC-Feed-20142_news_large.jpg",
                  location: location,
                  location_string: resturantItem.location_string,
                });
                // ResturantResp.save();
              });
              const dbResturants = await Resturant.find({
                location: location,
              });
              //
              res.json({ status: "API", data: dbResturants });
            })
            .catch(function (error) {
              console.error(error);
              return next(error.message);
            });
        })
        .catch(function (error) {
          console.error(error);
          return next(error.message);
        });
    }
  } catch (error) {
    return next(error.message);
  }
});

module.exports = router;
