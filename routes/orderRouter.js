const orderCtrl = require("../controllers/orderCtrl");
const auth = require("../middleware/auth");
const router = require("express").Router();

router.route("/order").post(orderCtrl.addOrder).get(auth, orderCtrl.orderList);

router.route("/order/:id").put(auth, orderCtrl.updateOrder);

module.exports = router;
