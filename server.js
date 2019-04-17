// Required dependencies
const express = require("express");
const app = express();

const mongoose = require("mongoose");

const routes = require("./routes");

const PORT = process.env.PORT || 3000;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add API and view routes
app.use(routes);

// Connect to Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks");

// Start API server
app.listen(PORT, function() {
  console.log(`You are now connected to PORT ${PORT}.`);
});