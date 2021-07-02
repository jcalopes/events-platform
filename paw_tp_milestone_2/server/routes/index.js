var express = require("express");
var eventosRouter = require("./eventos");
var locaisRouter = require("./localEvento");
var usersRouter = require("./users");
var bilhetesRouter = require("./bilhetes");
var Evento = require("../models/evento");
var router = express.Router();

router.get("/", (req, res) => {
  Evento.find({}).exec((err, dbEventos) => {
    if (err) {
      res.redirect("/error");
    } else {
      res.render("index", { eventos: dbEventos });
    }
  });
});

router.use("/eventos", eventosRouter);
router.use("/locais", locaisRouter);
router.use("/users", usersRouter);
router.use("/bilhetes", bilhetesRouter);

module.exports = router;
