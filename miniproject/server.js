const express = require("express");
const { usuario, publicacion } = require("./models/index");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/usuario", (req, res) => {
  const newUsuario = usuario(req.body);
  newUsuario.save((err, usuario) => {
    err ? res.status(400).send(err) : res.status(201).send(usuario);
  });
});

app.post("/publicacion", (req, res) => {
  const newPublicacion = publicacion(req.body);
  newPublicacion.save((err, publicacion) => {
    err ? res.status(400).send(err) : res.status(201).send(publicacion);
  });
});

app.get("/all/users", (req, res) => {
  usuario
  .find()
  .populate('publicacion')
  .exec()
  .then(result => {
      res.send(result);
    })
    .catch(err => {
      res.status(400).send(err);
    });
});

app.get("/all/publicaciones", (req, res) => {
  publicacion
    .find()
    .exec()
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      res.status(400).send(err);
    });
});

app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  usuario
    .findById(id)
    .exec()
    .then(result => {
      result
        ? res.send(result)
        : res.status(404).send({ message: "user not found" });
    })
    .catch(err => {
      res.status(400).send(err);
    });
});

app.patch("/usuario/:id", (req, res) => {
  const id = req.params.id;
  usuario
    .findByIdAndUpdate(id, { $set: req.body }, { new: true })
    .exec()
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      res.status(400).send(err);
    });
});

app.patch("/publicacion/:id", (req, res) => {
  const id = req.params.id;
  publicacion
    .findByIdAndUpdate(id, { $set: req.body }, { new: true })
    .exec()
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      res.status(400).send(err);
    });
});


app.listen(3000, () => {
  console.log("server on poort 3000");
});
