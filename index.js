const express = require("express"); // Imports express
const app = express(); // Initializes express app

const PORT = 8080; // Port on which to run the server

// Handle get requests to /
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/landing.html");
});

// Handle get requests to /home
app.get("/home", (req, res) => {
  res.sendFile(__dirname + "/views/home.html");
});

// Handle get requests to /student
app.get("/student", (req, res) => {
  res.sendFile(__dirname + "/views/student.html");
});

// Handle get requests to /teacher
app.get("/teacher", (req, res) => {
  res.sendFile(__dirname + "/views/teacher.html");
});

// Handle get requests to /admin
app.get("/admin", (req, res) => {
  res.sendFile(__dirname + "/views/admin.html");
});

// Server starts listening to the port
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
