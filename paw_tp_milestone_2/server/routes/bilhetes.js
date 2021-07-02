const express=require('express');
const router=express.Router();
const bilheteController=require('../controllers/bilheteController');
const userController=require('../controllers/userController');

router.get('/',bilheteController.showAll);
router.post('/createbilhetes',bilheteController.create);
router.put('/cancel/:id',userController.verifyToken, bilheteController.cancel);
router.put('/update/:id',userController.verifyToken, bilheteController.update);
router.get('/showbilhetescliente/:username',userController.verifyToken,bilheteController.showTicketsbyClient);
router.get('/showbilhetespromotor/:promotor', userController.verifyToken,userController.verifyPromotorAdmin,bilheteController.showTicketsbyPromotor);
router.get('/showbilhete/:id',userController.verifyToken,bilheteController.showbilhete);
router.post('/upload/:id',userController.verifyToken,bilheteController.uploadTestCovid);

module.exports=router;