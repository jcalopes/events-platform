var mongoose = require('mongoose');
var LocalEvento = require('../models/localEvento');
var fs = require("fs");
var localController = {};

localController.showAll = function(req, res){
    LocalEvento.find({}).exec((err, dblocais)=>{
        if (err){
            res.status(505).json(err);
        } else {
            res.status(200).json(dblocais);
        }
    });
}

localController.create = function(req,res,next){
    req.body.visivel === undefined
    ? (req.body.visivel = false)
    : (req.body.visivel = true);

  let data = {
    errors: [],
    ...req.body
  };

  if (data.nome.trim().length == 0) {
    data.errors.push(" *Introduza o campo nome!");
  }
  if (data.lotacao< 0) {
    data.errors.push( " *Introduza o campo lotação!");
  }
  if (data.cidade.trim().length == 0) {
    data.errors.push( " *Introduza o campo cidade!");
  }
  if (data.rua.trim().length == 0) {
    data.errors.push( " *Introduza o campo rua!");
  }
  if (data.pais.trim().length == 0) {
    data.errors.push( " *Introduza o campo pais!");
  }
  if (data.errors.length > 0) {
    res.status(505).json(errors);
  } else {
    req.body._id=new mongoose.Types.ObjectId().toHexString();
    var local = new LocalEvento(req.body);
    local.save((err) => {
      if(err) 
        res.status(501).json(err);
      else{
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
  }
}

localController.delete = function(req, res){
    LocalEvento.remove({_id:req.params.id}).exec((err)=>{
        (err)?
        res.status(501).json(err):
        res.status(200).json(req.params.id);
    });
}

localController.edit = function(req,res){
    LocalEvento.findByIdAndUpdate(req.params.id, req.body, (err, editedItem)=>{
        (err)?
        res.status(501).json(err):
        res.status(200).json(editedItem);
    });
}

localController.showLocaisDoPromotor = function(req, res){
  LocalEvento.find({username:req.params.username}, (err, locais)=>{
    (err) ? res.status(404).json(err) : res.status(200).json(locais);
  });
}

localController.uploadPoster=function(req,res){
  let id;
   fs.readdir("public/posts", function (err, files) {
     files.forEach((file) => {
       if (file === "newimage.png") {
           console.log("=",req.params.id);
         id = req.params.id;
         fs.rename(
           "public/posts/newimage.png",
           "public/posts/" + id + ".png",
           () => {
        res.status(200).json("Post Atualizado");
           }
         );
       }
     });
   },(err)=>{
     res.status(501).json("Erro no upload do post");
   });
}

module.exports = localController;