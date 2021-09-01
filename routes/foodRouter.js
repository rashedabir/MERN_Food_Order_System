const foodCtrl = require("../controllers/foodCtrl");
const auth = require("../middleware/auth");
const router = require("express").Router();

router.route("/food").post(auth, foodCtrl.addFood).get(foodCtrl.getFood);

router.route("/allfood").get(foodCtrl.getAllFood);

router.get("/featured_food", foodCtrl.getFeaturedFood);

router
  .route("/food/:id")
  .put(auth, foodCtrl.updateFood)
  .delete(auth, foodCtrl.deleteFood);

module.exports = router;
