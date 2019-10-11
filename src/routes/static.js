const express = require("express");
const router = express.Router();
const staticController = require("../controllers/staticController");
<<<<<<< HEAD

router.get("/", staticController.index);


=======
router.get("/", staticController.index);
>>>>>>> topic-resource
module.exports = router;
