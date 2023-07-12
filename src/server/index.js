const express = require("express");
const bodyParser = require("body-parser");
const analyzeForm = require("./analyzeForm"); // Import the form submission module

const app = express();
app.use(bodyParser.json());

// Serve the static files from the 'dist' directory
app.use(express.static("dist"));

// Define a route to handle the form submission
app.post("/analyze", analyzeForm);

// Serve the index.html file for home route
app.get("/", (req, res) => {
  res.sendFile("dist/index.html");
});

// Start the server
app.listen(3000, () => {
  console.log("Server started on port 3000");
});
