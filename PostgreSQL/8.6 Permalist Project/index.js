import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "permalist",
  password: "123123123",
  port: 5432,
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

async function startServer() {
  try {
    await db.connect();
    console.log("Database connected successfully");
  } catch {
    console.error("Failed to connect to database", err);
  }
}

startServer();

async function initItems() {
  try {
    const result = await db.query("SELECT * FROM items ORDER BY id ASC");

    let items = [];
    result.rows.forEach((item) => {
      items.push(item);
    });

    console.log(items);

    return items;
  } catch (err) {
    console.error("Error executing query", err.stack);
    res.status(500).send("Internal Server Error");
    return [];
  }
}

app.get("/", async (req, res) => {
  const items = await initItems();
  res.render("index.ejs", {
    listTitle: "Today",
    listItems: items,
  });
});

app.post("/add", async (req, res) => {
  const item = req.body.newItem;

  try {
    await db.query("INSERT INTO items (title) VALUES ($1)", [item]);
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
  res.redirect("/");
});

app.post("/edit", async (req, res) => {
  const id = req.body.updatedItemId;
  const item = req.body.updatedItemTitle;
  console.log(id, item);
  try {
    await db.query("UPDATE items SET title = $1 WHERE id = $2", [item, id]);
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
  res.redirect("/");
});

app.post("/delete", async (req, res) => {
  const id = req.body.deleteItemId;
  console.log(id);
  try {
    await db.query("DELETE FROM items WHERE id = $1", [id]);
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
