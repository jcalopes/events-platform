var mongoose = require("mongoose");
var Evento = require("../models/evento");
var Bilhete = require("../models/bilhetes");
var fs = require("fs");
const evento = require("../models/evento");
var eventoController = {};

eventoController.showAll = function (req, res) {
  Evento.find({}).exec((err, dbEventos) => {
    if (err) {
      res.status(404).json(err);
    } else {
      res.status(200).json(dbEventos);
    }
  });
};

eventoController.showEvento=function(req,res){
  Evento.findById(req.params.id,(err,doc)=>{
    (err)?res.status(500).json(err):res.status(200).json(doc);
  })
}

eventoController.uploadPoster=function(req,res){
   fs.readdir("public/posts", function (err, files) {
     files.forEach((file) => {
       if (file === "newimage.png") {
         let id = req.params.id;
         fs.rename(
           "public/posts/newimage.png",
           "public/posts/" + id + ".png",
           () => {
             res.status(200).json("Poster Atualizado");
           }
         );
       }
     });
   },(err)=>{
     res.status(500).json("Erro no upload do post");
   });
}

eventoController.create = function (req, res) {
  let data = {
    errors: [],
    ...req.body,
  };

   if (data.nome.trim().length == 0) {
     data.errors.push(" *\n Introduza campo nome");
   }
   if (data.descricao.trim().length == 0) {
     data.errors.push("\n *Introduza campo descrição");
   }

   let startDate = new Date(data.dataInicio);
   let endDate = new Date(data.dataFim);
   let today = new Date();

   if (startDate.getTime() < today.getTime()) {
     data.errors.push(" *\n Data de inicio anterior ao dia de hoje!");
   }

   if (endDate.getTime() < startDate.getTime()) {
     data.errors.push(" *\n Data de fim anterior à data de inicio do evento!");
   }

  if (data.errors.length == 0) {
     req.body.dataInicio = startDate;
     req.body.dataFim = endDate;
     req.body._id=new mongoose.Types.ObjectId();
    var event = new Evento(req.body);
    console.log(event)
     event.save((err) => {
       if (err) {
         res.status(501).json(err);
       } else {
        req.params.id=req.body._id;
         fs.readdir("public/posts", function (err, files) {
            files.forEach((file) => {
              console.log(file);
              if (file === "newimage.png") {
                let id = req.body._id;
                fs.rename(
                  "public/posts/newimage.png",
                  "public/posts/" + id + ".png",
                  () => {
                res.status(200).json("Post Atualizado");
                  });
              }
            });
          })
       }
     });
  } else {
    res.status(504).json(data.errors);
  }
};

eventoController.delete = function (req, res) {
  Bilhete.find({"evento.id":req.params.id},(err,docs)=>{
    if(err){
      res.status(400).json(err);
    }
    else{
      docs.forEach((ticket)=>{
        ticket.cancelado=true;
        console.log("-->",ticket);
        ticket.save();
      });
    }
  });

  Evento.remove({ _id: req.params.id }).exec((err) => {
    if (err) {
      res.status(504).json(err);
    } else {
      res.status(200).json({ msg: "Eliminado com sucesso" });
    }
  });
};

eventoController.edit = function (req, res) {
  req.body.visivel === undefined
    ? (req.body.visivel = false)
    : (req.body.visivel = true);

  let data = {
    errors: [],
    ...req.body,
  };

  if (data.nome.trim().length == 0) {
    data.errors.push(" *\n Introduza campo nome");
  }
  if (data.descricao.trim().length == 0) {
    data.errors.push("\n *Introduza campo descrição");
  }

  let startDate = new Date(data.dataInicio);
  let endDate = new Date(data.dataFim);
  let today = new Date();

  if (startDate.getTime() < today.getTime()) {
    data.errors.push(" *\n Data de inicio anterior ao dia de hoje!");
  }

  if (endDate.getTime() < startDate.getTime()) {
    data.errors.push(" *\n Data de fim anterior à data de inicio do evento!");
  }

  if (data.errors.length == 0) {
    Evento.findByIdAndUpdate(req.params.id, req.body, (err, editedItem) => {
      if (err) {
        res.status(504).json(err);
      } else {
        fs.readdir("public/posts", function (err, files) {
          files.forEach((file) => {
            if (file === "newimage.png") {
              let nome = req.body.nome;
              fs.rename(
                "public/posts/newimage.png",
                "public/posts/" + nome + ".png",
                () => {
                  console.log("");
                }
              );
            }
          });
        });
        res.status(200).json(editedItem);
      }
    });
  } else {
    res.status(504).json(err);
  }
};

eventoController.showOne = function (req, res) {
  Evento.findOne({ _id: req.params.id }).exec((err, dbEvent) => {
    if (err) {
      res.redirect("/error");
    } else {
      res.status(300).json(dbEvent);
    }
  });
};

eventoController.showEventsPromotor = function (req, res) {
  Evento.find({ promotor: req.params.promotor }, (err, event) => {
    err ? res.status(404).json(err) : res.status(200).json(event);
  });
};

eventoController.showEventsLocal=function(req,res){
  Evento.find({ local: req.params.local }, (err, event) => {
    err ? res.status(404).json(err) : res.status(200).json(event);
  });
}

eventoController.showTopEventos = function (req, res) {
  let eventos=[];

  Bilhete.aggregate([
    {
      $match: {
          $and: [{ validado: { $eq: true } }
           ,{ "evento.dataInicio": { $gt: new Date(Date.now()) } },
           { cancelado: { $eq: false } }
        ]
      }
  },
    {
      $group: {
        _id: { id: "$evento.id", nome: "$evento.nome" },
        count: { $sum: 1 },
        id: { $first: "$evento.id"},
        nome: { $first: "$evento.nome" },
        dataInicio: { $first: "$evento.dataInicio" },
        dataFim: { $first: "$evento.dataFim" },
        cancelado: { $first: "$cancelado" },
      },
    },
    { $sort: { count: -1 }},
    {$unset:["_id"]}
  ]).limit(10).exec((err, docs) => {
    res.status(200).json(docs);
  });
};

eventoController.showCategorias = function (req, res) {
  Bilhete.aggregate([
    {
      $match: {
          $and: [{ validado: { $eq: true } },
           { cancelado: { $eq: false } }
        ]
      }
  },
    {
      $group: {
        _id: {nome: "$evento.nome"},
        count: { $sum: "$evento.preco"},
        nome: { $first: "$evento.nome" }
      },
    },
    { $sort: { count: -1 }},
    {$unset:["_id"]}
  ]).exec((err, docs) => {
    res.status(200).json(docs);
  });
};

eventoController.showFaturaMes = function (req, res) {
  Bilhete.aggregate([
    {
      $match: {
          $and: [{ validado: { $eq: true } }
           ,{ "evento.dataInicio": { $gt: new Date("2021-01-01") } },
           { cancelado: { $eq: false } }
        ]
      }
  },
    {
      $group: {
        _id: { "$month": { "$toDate": "$dataCompra" }},
        count: { $sum: "$evento.preco"}
      },
    },
    { $sort: { "_id": 1 }}
  ]).exec((err, docs) => {
    res.status(200).json(docs);
  });
};

eventoController.showCategories=function(req,res){
  Bilhete.aggregate([
    {
      $match: {
          $and: [{ validado: { $eq: true } },
           { cancelado: { $eq: false } }
        ]
      }
  },
    {
      $group: {
        _id: {categoria: "$evento.categoria"},
        count: { $sum: 1},
        categoria: { $first: "$evento.categoria" }
      },
    },
    { $sort: { count: -1 }},
    {$unset:["_id"]}
  ]).exec((err, docs) => {
    res.status(200).json(docs);
  });
}

module.exports = eventoController;
