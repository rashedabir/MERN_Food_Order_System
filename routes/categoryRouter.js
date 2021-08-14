const router = require("express").Router();
const categoryCtrl = require("../controllers/categoryCtrl");
const auth = require("../middleware/auth");

router
  .route("/category")
  .post(auth, categoryCtrl.createCategory)
  .get(categoryCtrl.getCategory);

router
  .route("/category/:id")
  .put(auth, categoryCtrl.updateCategory)
  .delete(auth, categoryCtrl.deleteCategory);

module.exports = router;
