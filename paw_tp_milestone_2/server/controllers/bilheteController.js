const { Mongoose } = require("mongoose");
const Bilhete = require("../models/bilhetes");
const Local = require("../models/localEvento");
const bilheteController = {};
var fs = require("fs");

bilheteController.create = function (req, res) {
  tick = new Bilhete();
  tick.username = req.body.username;
  tick.dataCompra = req.body.dataCompra;
  tick.evento = req.body.evento;

  const promise = Bilhete.countDocuments({ "evento.id": tick.evento.id, cancelado:false });
  let numBilhetes = 0;
  promise
    .then((doc) => {
      numBilhetes = doc;
      Local.find({ nome: tick.evento.local }, (err, doc) => {
        if (parseInt(doc[0].lotacao * (doc[0].lotacaoPerc / 100)) <= numBilhetes) {
          res.status(400).json("Evento Esgotado");
        } else {
          tick.save((err) => {
            res.status(200).json(tick);
          });
        }
      });
    })
    .catch((err) => {
      res.status(400).json(err.message);
    });
};

bilheteController.cancel = function (req, res) {
  Bilhete.findById(req.params.id, (err, doc) => {
    if (err) res.status(400).json(err);
    else {
      doc.cancelado = true;
      doc.dataCancelamento = new Date(Date.now());
      Bilhete.findByIdAndUpdate(
        req.params.id,
        doc,
        { new: true },
        (err, editedItem) => {
          err ? res.status(504).json(err) : res.status(200).json(editedItem);
        }
      );
    }
  });
};

bilheteController.update = function (req, res) {
  Bilhete.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, editedItem) => {
      err ? res.status(504).json(err) : res.status(200).json(editedItem);
    }
  );
};

bilheteController.showAll = function (req, res) {
  Bilhete.find({}).exec((err, dbBilhetes) => {
    if (err) {
      res.status(404).json(err);
    } else {
      res.status(200).json(dbBilhetes);
    }
  });
};

bilheteController.showTicketsbyClient = function (req, res) {
  Bilhete.find({ username: req.params.username }, (err, tickets) => {
    err ? res.status(404).json(err) : res.status(200).json(tickets);
  });
};

bilheteController.showbilhete = function (req, res) {
  Bilhete.findById(req.params.id, (err, ticket) => {
    err ? res.status(404).json(err) : res.status(200).json(ticket);
  });
};

bilheteController.uploadTestCovid = function (req, res) {
  fs.readdir(
    "public/posts",
    function (err, files) {
      files.forEach((file) => {
        if (file === "newimage.png") {
          let id = req.params.id;
          fs.rename(
            "public/posts/newimage.png",
            "public/posts/" + id + ".png",
            () => {
              res
                .status(200)
                .json("Comprovativo teste ao covid 19 enviado com sucesso!");
            }
          );
        }
      });
    },
    (err) => {
      res.status(501).json("Erro no upload do teste ao covid 19");
    }
  );
};

bilheteController.showTicketsbyPromotor = function (req, res) {
  Bilhete.find({ "evento.promotor": req.params.promotor }, (err, tickets) => {
    err ? res.status(404).json(err) : res.status(200).json(tickets);
  });
};

module.exports = bilheteController;
