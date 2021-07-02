const User = require("../models/users");
const userController = {};
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../jwtSecret/config");
const pattern = /^\d{9}$/;
var mongoose = require('mongoose');

userController.getUsers = function (req, res) {
  User.find({}, (err, docs) => {
    if (err) {
      res.status(500).json("Erro no carregamento dos utilizadores");
    } else {
      res.status(200).json(docs);
    }
  });
};

userController.signUp = function (req, res) {
  let errors = [];

  if (!pattern.test(req.body.contact)) {
    errors.push("Contacto Não é válido");
  }
  if (!pattern.test(req.body.nif)) {
    errors.push("NIF inválido.Deve conter 9 digitos");
  }
  if (req.body.fname.trim().length == 0) {
    errors.push("Nome Não é válido");
  }
  if (req.body.lname.trim().length == 0) {
    errors.push("Nome Não é válido");
  }
  if (req.body.password.trim().length < 8) {
    errors.push("Password deve conter no minimo 8 caracteres");
  }

  req.body._id=new mongoose.Types.ObjectId().toHexString();
  let uti = new User(req.body);

  if (errors.length == 0) {
    let hashPass = bcrypt.hashSync(uti.password, 8);
    uti.password = hashPass;
    
    User.findOne({ username: req.body.username })
    .then((doc) => {
      if (doc) throw Error("Username já existe.");
    })
    .then(() => {
      uti.save((error) => {
        res.status(200).json("criado");
      });
    }).catch((err)=>{
      res.status(400).json(err.message);
    });  
  } 
  else 
    res.status(407).json(errors);
};

userController.logIn = function (req, res) {
  User.findOne({ username: req.body.username })
    .then((doc) => {
      if (!doc) throw Error("Autenticação falhou. Username não existe");
      else return doc;
    })
    .then((doc) => {
      if (!bcrypt.compareSync(req.body.password, doc.password))
        throw Error("Autenticação falhou.Username e/ou password inválidos");
      else return doc;
    })
    .then((doc) => {
      if (!doc.active)
        throw Error("Autenticação falhou.Username e/ou password inválidos");
      let token = jwt.sign({ id: doc._id, role: doc.role }, config.secret, {
        expiresIn: 86400,
      });
      res
        .status(200)
        .send({
          auth: true,
          token: token,
          username: doc.username,
          role: doc.role,
          _id: doc._id,
        });
    })
    .catch((err) => {
      res.status(401).json({ auth: false, token: null });
    });
};

userController.updateAccount = function (req, res) {
  let errors = [];

  if (req.body.contact && !pattern.test(req.body.contact)) {
    errors.push("Contacto Não é válido");
  }
  if (req.body.nif && !pattern.test(req.body.nif)) {
    errors.push("NIF inválido.Deve conter 9 digitos");
  }
  if (req.body.fname && req.body.fname.trim().length == 0) {
    errors.push("Nome Não é válido");
  }
  if (req.body.lname && req.body.lname.trim().length == 0) {
    errors.push("Nome Não é válido");
  }

  if (errors.length > 0) {
    res.status(505).json(errors);
  } else {
    User.findByIdAndUpdate(req.params.id, req.body, (err, doc) => {
      if (err) {
        res.status(505).json(err);
      } else {
        res.status(200).json("Perfil Atualizado");
      }
    });
  }
};

userController.changePassword = function (req, res) {
  let errors = [];
  if (req.body.password.trim().length < 8) {
    errors.push("A password deve conter pelo menos 8 caracteres");
    res.status(505).json(errors);
  } else {
    User.findOne({ _id: req.params.id })
      .then((doc) => {
        if (!bcrypt.compareSync(req.body.oldPassword, doc.password)) {
          errors.push("Password antiga inválida");
          throw Error(errors);
        } else return doc;
      })
      .then((doc) => {
        let hashPass = bcrypt.hashSync(req.body.password, 8);
        doc.password = hashPass;
        return User.findByIdAndUpdate(req.params.id, doc);
      })
      .then((doc) => {
        res.status(200).json("Atualizada com sucesso");
      })
      .catch((err) => {
        errors.push("Não foi possivel atualizar password");
        res.status(505).json(errors);
      });
  }
};

userController.deleteAccount = function (req, res) {
  User.findByIdAndRemove(req.params.id, (err, removedUser) => {
    err
      ? res
          .status(505)
          .json("Erro no servidor.Não foi possível remover utilizador")
      : res.status(200).json(removedUser);
  });
};

userController.getUser = function (req, res) {
  User.findById(req.params.id, (err, user) => {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(200).json(user);
    }
  });
};

userController.disableAccount = function (req, res) {
  User.findById(req.params.id, (err, user) => {
    if (err) {
      res.status(404).json(err);
    } else {
      user.active = false;
      User.findByIdAndUpdate(
        req.params.id,
        user,
        { new: true },
        (err, updatedUser) => {
          err
            ? res
                .status(505)
                .json(
                  "Erro no servidor.Não foi possível desativar conta de utilizador"
                )
            : res.status(200).json(updatedUser);
        }
      );
    }
  });
};

userController.verifyToken = function (req, res, next) {
  var token = req.headers["x-access-token"];
  if (!token) {
    return res.status(403).send({ auth: false, message: "No token provided" });
  } else {
    jwt.verify(token, config.secret, function (err, decoded) {
      if (err) {
        return res.status(500).send({ auth: false, message: "Invalid Token" });
      }
      req.userId = decoded.id;
      req.role = decoded.role;
      next();
    });
  }
};

userController.verifyAdmin = function (req, res, next) {
  User.findById(req.userId, function (err, user) {
    if (err)
      return res.status(500).send("There was a problem finding the user.");
    if (!user) return res.status(404).send("No user found.");
    if (user.role === "admin") {
      next();
    } else {
      return res.status(403).send({ auth: false, message: "Access Denied!" });
    }
  });
};

userController.verifyPromotor = function (req, res, next) {
  User.findById(req.userId, function (err, user) {
    if (err)
      return res.status(500).send("There was a problem finding the user.");
    if (!user) return res.status(404).send("No user found.");
    if (user.role === "promotor") {
      next();
    } else {
      return res.status(403).send({ auth: false, message: "Access Denied!" });
    }
  });
};

userController.verifyClient = function (req, res, next) {
  User.findById(req.userId, function (err, user) {
    if (err)
      return res.status(500).send("There was a problem finding the user.");
    if (!user) return res.status(404).send("No user found.");
    if (user.role === "user") {
      next();
    } else {
      return res.status(403).send({ auth: false, message: "Access Denied!" });
    }
  });
};

userController.verifyPromotorAdmin = function (req, res, next) {
  User.findById(req.userId, function (err, user) {
    if (err)
      return res.status(500).send("There was a problem finding the user.");
    if (!user) return res.status(404).send("No user found.");
    if (user.role === "promotor" || user.role === "admin") {
      next();
    } else {
      return res.status(403).send({ auth: false, message: "Access Denied!" });
    }
  });
};

userController.toBan = function (req, res) {
  return User.findOne({ username: req.params.username })
    .then((doc) => {
      doc.active = false;
      return doc;
    })
    .then((doc) => {
      User.findByIdAndUpdate(
        doc._id,
        doc,
        { new: true },
        (err, updatedUser) => {
          err
            ? res
                .status(505)
                .json(
                  "Erro no servidor.Não foi possível desativar conta de utilizador"
                )
            : res.status(200).json(updatedUser);
        }
      );
    });
};

module.exports = userController;
