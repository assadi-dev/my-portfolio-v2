const router = require("express").Router();
const UserController = require("../controller/UserController");
const cvupload = require("../middlewares/cv_upload");

router.get("/users", UserController.getUsers);
router.get("/user/:id", UserController.getOneUser);
router.post("/user", UserController.createUser);
router.put("/user/:id", cvupload.single("cv"), UserController.editUser);
router.delete("/user/:id", UserController.deleteUser);

module.exports = router;