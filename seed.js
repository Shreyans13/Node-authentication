const resturantData = require("./data.json");
const Resturant = require("./models/resturant");

console.log(resturantData);

module.exports = () => {
  try {
    resturantData.results.data.map(async (resturantItem) => {
      console.log("------------------------------------------------------");
      console.log(resturantItem);
      console.log("------------------------------------------------------");
      let ResturantResp = await Resturant.create({
        name: resturantItem.name,
        rating: resturantItem.rating,
        type: resturantItem.ranking_category,
        time: resturantItem.open_now_text,
        rate: resturantItem.price,
        imgSrc: resturantItem.photo
          ? resturantItem.photo.images["original"].url
          : "https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/9/2/8/5/235829-6-eng-GB/Feed-Test-SIC-Feed-20142_news_large.jpg",
        location: "jamshedpur",
        location_string: resturantItem.location_string,
      });
      // ResturantResp.save();
    });
  } catch (e) {
    console.log(e);
  }
};
