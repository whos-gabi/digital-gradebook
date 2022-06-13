const express = require("express"); // Imports express
const app = express(); // Initializes express app

const PORT = 8080; // Port on which to run the server

// Handle get requests to /
app.get("/", (req, res) => {
  res.sendFile("./view/landing.html");
});

// Handle get requests to /home
app.get("/", (req, res) => {
  res.sendFile("./view/home.html");
});

// Handle get requests to /student
app.get("/", (req, res) => {
  res.sendFile("./view/student.html");
});

// Handle get requests to /teacher
app.get("/", (req, res) => {
  res.sendFile("./view/teacher.html");
});

// Handle get requests to /admin
app.get("/", (req, res) => {
  res.sendFile("./view/admin.html");
});

// Server starts listening to the port
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
