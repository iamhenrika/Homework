const express = require("express")
const app = express()
const PORT = 3000
const pokemon = require("./models/pokemon")
const reactViews = require('express-react-views')

app.set("view engine", "jsx")
app.engine("jsx", reactViews.createEngine())

app.use((req, res, next) => {
  //console.log('Middleware')
  next();
});

app.get("/home", (req, res) => {
  res.send('<h1> Welcome to the Pokemon App </h1>')
})

app.get("/pokemon", (req, res) => {
  res.render("Index", {pokemon: pokemon});
});

app.get("/pokemon/:id", (req, res) => {
  res.render("Show", pokemon[req.params.id]);
});
// app.get("/pokemon", (req, res) => {
//   res.send(pokemon)
// })

app.listen(PORT, () => { 
  console.log(`Listening on port: ${PORT}`)
});