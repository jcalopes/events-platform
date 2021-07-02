const express = require("express");
const router = express.Router();
const localController = require("../controllers/localController");
const userController=require('../controllers/userController');

router.get("/", localController.showAll);
router.post("/createLocal", userController.verifyToken,userController.verifyPromotorAdmin,localController.create);
router.delete("/deleteLocal/:id", userController.verifyToken, userController.verifyPromotorAdmin,localController.delete);
router.put("/editLocal/:id", userController.verifyToken,userController.verifyPromotorAdmin,userController.verifyPromotor, localController.edit);
router.get("/showLocaisDoPromotor/:username", userController.verifyToken,userController.verifyPromotor, localController.showLocaisDoPromotor);
router.post('/upload/:id', userController.verifyToken,userController.verifyPromotorAdmin,localController.uploadPoster);
module.exports = router;
