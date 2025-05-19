import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Home page</h1><p>This is the home page</p>");
});

app.get("/about", (req, res) => {
  res.send("<h1>About page</h1><p>This is the about page</p>");
});

app.get("/contact", (req, res) => {
  res.send("<h1>Contact page</h1><p>This is the contact page</p>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
