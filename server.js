const express = require("express");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;
const app = express();
const routes = require("./routes");


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes
app.use(routes);

//Connecting to Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/googlebooks", { useNewUrlParser: true }
).then(() => {
  //Starting API server
  app.listen(PORT, function () {
    console.log(`You are now connected on ${PORT}!`);
  });
}).catch(err => {
  console.log(err);
});

