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
    "SELECT country_code FROM visited_countries"
  );

  countries = [];
  visited_countries.rows.forEach((country) => {
    countries.push(country.country_code);
  });

  console.log(countries);
}

app.get("/", async (req, res) => {
  //Write your code here.

  await checkVisisted();
  res.render("index.ejs", {
    countries: countries,
    total: countries.length,
  });
});

app.post("/add", async (req, res) => {
  const input = req.body["country"];

  try {
    const result = await db.query(
      "SELECT country_code FROM countries WHERE LOWER(country_name) LIKE '%' || $1 || '%';",
      [input.toLowerCase()]
    );

    if (result.rows.length !== 0) {
      const data = result.rows[0];
      const countryCode = data.country_code;

      try {
        const isVisited = await db.query(
          "SELECT country_code FROM visited_countries WHERE country_code = $1",
          [countryCode]
        );
        if (isVisited.rows.length === 0) {
          try {
            await db.query(
              "INSERT INTO visited_countries (country_code) VALUES ($1)",
              [countryCode]
            );
            res.redirect("/");
          } catch (err) {
            console.error(err);
            res.status(500).send("Internal Server Error");
          }
        } else {
          await checkVisisted();

          res.render("index.ejs", {
            countries: countries,
            total: countries.length,
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
        total: countries.length,
        error: "Country not found",
      });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
