// Import package
const express = require("express");

// Setup app to use ejs
const app = express();
app.set("view engine", "ejs");

// Hardcoded database
const studentList=[{name:"Cassandra",major:"Computer Science"},{name:"Juan",major:"Biology"},{name:"Miguel",major:"Civil Engineering"},{name:"Andrew",major:"Computer Science"},{name:"Peter",major:"Mechanical Engineering"},{name:"Sophia",major:"Biology"},{name:"Briana",major:"English"}];

// Render homepage
app.get("/", (req, res) => {
  res.render("index", {
    students: studentList,
  });
});

// Start server
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
