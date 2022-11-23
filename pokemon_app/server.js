require("dotenv").config()
const express = require("express")
const app = express()
const PORT = 3000
const Pokemon = require("./models/pokemon")

const reactViews = require('express-react-views')

const mongoose = require("mongoose")

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

db.on("error", (err) => console.log(err.message + " is mongo not running?"));
db.on("open", () => console.log("mongo connected: ", mongoURI));
db.on("close", () => console.log("mongo disconnected"));

app.set("view engine", "jsx")
app.engine("jsx", reactViews.createEngine())

app.use((req, res, next) => {
  //console.log('Middleware')
  next();
});

app.use(express.urlencoded({ extended: false }));

app.get("/home", (req, res) => {
  res.send('<h1> Welcome to the Pokedex </h1>')
})

// app.get("/pokemon", (req, res) => {
//   res.render("Index", { pokemon: pokemon });
// });

app.get("/pokemon", (req, res) => {
  Pokemon.find({}, (error, allPokemon) => {
    if (!error) {
      res.status(200).render("Index", {
        pokemon: allPokemon
      });
    } else {
      res.status(400).send(error);
    }
  });
});

app.get("/pokemon/new", (req, res) => {
  res.render("New");
});

app.post("/pokemon", (req, res) => {
  Pokemon.create(req.body, (error, createdPokemon) => {
      if(!error) {
          res.status(200).redirect("/pokemon");
      } else {
          res.status(400).send(error);
      }
  });
});

// app.get("/pokemon/:id", (req, res) => {
//   res.render("Show", pokemon[req.params.id]);
// });

// app.get("/pokemon", (req, res) => {
//   res.send(pokemon)
// })

app.get("/pokemon/:id", (req, res) => {
  Pokemon.findById(req.params.id, (error, foundPokemon) => {
      if(!error) {
          res.status(200).render("Show", {
              pokemon: foundPokemon
          });
      } else {
          res.status(400).send(error);
      }
  });
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
});