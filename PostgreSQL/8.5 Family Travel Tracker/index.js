import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: "123123123",
  port: 5432,
});
db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let countries = [];

async function checkVisisted() {
  const visited_countries = await db.query(
    "SELECT country_code FROM trips JOIN users ON users.id = users_id JOIN countries ON countries.id = countries_id WHERE users_id = $1",
    [currentUserId]
  );

  countries = [];
  visited_countries.rows.forEach((country) => {
    countries.push(country.country_code);
  });

  console.log(countries);
}

let currentUserId = 0;

let users = [];

async function getUsers() {
  const result = await db.query("SELECT * FROM users");

  users = [];

  if (result.rows.length === 0) return;

  result.rows.forEach((user) => {
    users.push(user);
  });

  if (currentUserId === 0) {
    currentUserId = users[0].id;
  }

  console.log(users);
}

app.get("/", async (req, res) => {
  //Write your code here.

  await getUsers();
  await checkVisisted();
  console.log(countries);
  console.log(currentUserId);

  if (users.length === 0) {
    res.render("new.ejs");
  } else {
    res.render("index.ejs", {
      countries: countries,
      users: users,
      color: users.find((user) => user.id === currentUserId).color,
      total: countries.length,
    });
  }
});

app.post("/add", async (req, res) => {
  const input = req.body["country"];

  try {
    const result = await db.query(
      "SELECT countries.id AS id FROM countries WHERE LOWER(country_name) LIKE '%' || $1 || '%';",
      [input.toLowerCase()]
    );

    if (result.rows.length !== 0) {
      const data = result.rows[0];
      const countryId = data.id;

      try {
        const isVisited = await db.query(
          "SELECT country_code FROM trips JOIN users ON users.id = users_id JOIN countries ON countries.id = countries_id WHERE users_id = $1 AND countries_id = $2;",
          [currentUserId, countryId]
        );
        if (isVisited.rows.length === 0) {
          try {
            console.log(currentUserId, countryId);
            await db.query(
              "INSERT INTO trips (users_id, countries_id) VALUES ($1, $2)",
              [currentUserId, countryId]
            );
            res.redirect("/");
          } catch (err) {
            console.error(err);
            res.status(500).send(" Error");
          }
        } else {
          await checkVisisted();

          res.render("index.ejs", {
            countries: countries,
            users: users,
            total: countries.length,
            color: users.find((user) => user.id === currentUserId).color,
            error: "Country already visited",
          });
        }
      } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
      }
    } else {
      await checkVisisted();

      res.render("index.ejs", {
        countries: countries,
        users: users,
        total: countries.length,
        color: users.find((user) => user.id === currentUserId).color,
        error: "Country not found",
      });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/user", async (req, res) => {
  if (req.body["add"] === "new") {
    res.render("new.ejs");
  } else {
    currentUserId = Number(req.body["user"]);
    res.redirect("/");
  }
});

app.post("/new", async (req, res) => {
  //Hint: The RETURNING keyword can return the data that was inserted.
  //https://www.postgresql.org/docs/current/dml-returning.html

  const name = req.body["name"];
  const color = req.body["color"];

  try {
    const result = await db.query("SELECT * FROM users WHERE name = $1", [
      name,
    ]);

    if (result.rows.length !== 0) {
      res.render("new.ejs", { error: "User already exists" });
      return;
    } else {
      await db.query("INSERT INTO users (name, color) VALUES ($1, $2)", [
        name,
        color,
      ]);
      res.redirect("/");
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
