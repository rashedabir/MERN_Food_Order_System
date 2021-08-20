const router = require("express").Router();
const userCtrl = require("../controllers/userCtrl");
const auth = require("../middleware/auth");

router.post("/register", auth, userCtrl.register);
router.post("/login", userCtrl.login);
router.get("/refresh_token", userCtrl.refreshToken);
router.get("/logout", userCtrl.logOut);
router.get("/infor", auth, userCtrl.getUser);

router.put("/infor/:id", auth, userCtrl.updatePassword);

module.exports = router;
