const express = require("express");

const router = express.Router();
const { verifyToken } = require("./services/jwt");

const roleControllers = require("./controllers/roleControllers");
// const validateRole = require("./validators/validateRole");

router.get("/roles", roleControllers.browse);
router.get("/roles/:id", roleControllers.read);
// router.post("/roles", validateRole, roleControllers.add);
// router.put("/roles/:id", validateRole, roleControllers.edit);
// router.delete("/roles/:id", roleControllers.destroy);

const { hashPwd, verifyPwd } = require("./services/argon");

const userController = require("./controllers/userControllers");
// const validateUser = require("./validators/validateUser");

router.post("/register", hashPwd, userController.createUser);
router.post("/login", verifyPwd, userController.login);

router.use(verifyToken);

router.get("/users", userController.browse);
router.get("/users/:id", userController.read);
router.post("/users", userController.add);
// router.put("/users/:id", validateUser, userControllers.edit);
// router.delete("/users/:id", userControllers.destroy);
router.delete("/logout", userController.logout);
/* ************************************************************************* */

module.exports = router;
