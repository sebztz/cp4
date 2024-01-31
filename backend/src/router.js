const express = require("express");

const router = express.Router();

const roleControllers = require("./controllers/roleControllers");
// const validateRole = require("./validators/validateRole");

router.get("/roles", roleControllers.browse);
router.get("/roles/:id", roleControllers.read);
// router.post("/roles", validateRole, roleControllers.add);
// router.put("/roles/:id", validateRole, roleControllers.edit);
// router.delete("/roles/:id", roleControllers.destroy);

const userControllers = require("./controllers/userControllers");
// const validateUser = require("./validators/validateUser");

router.get("/users", userControllers.browse);
router.get("/users/:id", userControllers.read);
// router.post("/users", validateUser, userControllers.add);
// router.put("/users/:id", validateUser, userControllers.edit);
// router.delete("/users/:id", userControllers.destroy);

/* ************************************************************************* */

module.exports = router;
