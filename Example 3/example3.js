// Import package
const express = require("express");
const sqlite3 = require('sqlite3');
const { open } = require("sqlite");

// Setup app to use ejs
const app = express();
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

// Connect to database
let db;

(async () => {
  db = await open({
    filename: "studentList.db",
    driver: sqlite3.Database,
  });
})();

// Render homepage
app.get("/", async (req, res) => {
  const studentList = await db.all("SELECT * FROM students");
  res.render("index", {
    students: studentList,
  });
});

app.post("/addStudent", async (req, res) => {
  const {name, major} = req.body;
  await db.run("INSERT INTO students (name, major) VALUES (?,?)", [name, major]);
  res.redirect("/");
})

// Start server
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
