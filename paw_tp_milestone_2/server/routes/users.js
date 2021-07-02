const express=require('express');
const router=express.Router();
const userController=require('../controllers/userController');

router.post('/signup',userController.signUp);
router.post('/login',userController.logIn);
router.put('/updateAccount/:id',userController.verifyToken,userController.updateAccount);
router.put('/disable/:id',userController.verifyToken, userController.disableAccount);
router.get('/getUser/:id',userController.verifyToken,userController.getUser);
router.get('/getUsers',userController.verifyToken,userController.verifyAdmin,userController.getUsers);
router.put('/changePassword/:id',userController.verifyToken,userController.changePassword);
router.delete('/deleteAccount/:id',userController.verifyToken,userController.verifyAdmin,userController.deleteAccount);
router.put('/banned/:username',userController.toBan);
module.exports=router;