const express = require("express");
const router = express.Router();

router.use(express.json());
const {
  registerSuper,
  getAdmin,
  registerAdmin,
  registerUser,
  loginCheck,
} = require("../controller/login_handler");

const encryptPassword = require("../middleware/encrypt");
const auth = require("../middleware/auth");

// superadmin data = {
//   email:"aing@super.gg",
//   password:"palingsuper",
//   secret:'akusuper'
// }

router.post("/super", encryptPassword, registerSuper);
router.get("/", getAdmin);
router.post("/admin", auth, encryptPassword, registerAdmin);
router.post("/user", auth, encryptPassword, registerUser);
router.post("/login", loginCheck);

router.get("/tes", auth, (req, res) => {
  const data = req.user;
  console.log(req.user.role);
  res.status(200).json(data);
});

module.exports = router;
