var express = require('express');
var router = express.Router();
var eventoController = require('../controllers/eventoController');
const userController=require('../controllers/userController');

router.get('/', eventoController.showAll);
router.post('/createEvento',  userController.verifyToken,userController.verifyPromotorAdmin,eventoController.create);
router.delete('/deleteEvento/:id',userController.verifyToken,userController.verifyPromotorAdmin,eventoController.delete);
router.put('/editEvento/:id',userController.verifyToken,userController.verifyPromotorAdmin,eventoController.edit);
router.get('/showeventspromotor/:promotor',userController.verifyToken,userController.verifyPromotorAdmin,eventoController.showEventsPromotor);
router.get('/showeventslocal/:local',eventoController.showEventsLocal);
router.get('/showTopEventos',eventoController.showTopEventos);
router.post('/upload/:id',userController.verifyToken,userController.verifyPromotorAdmin,eventoController.uploadPoster);
router.get('/showEvento/:id',eventoController.showEvento);
router.get('/showEventosLucrativos',userController.verifyToken,userController.verifyAdmin,eventoController.showCategorias);
router.get('/showFaturaMes',userController.verifyToken,userController.verifyAdmin,eventoController.showFaturaMes);
router.get('/showCategories',userController.verifyToken,userController.verifyAdmin,eventoController.showCategories);

module.exports = router;