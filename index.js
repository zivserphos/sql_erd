const express = require("express");
const app = express();
const { connect } = require("./db/index");
const apiRouter = require("./routes/api");

// Should be kept as environment variable

const port = process.env.PORT || 3000;

connect().then(
  () => console.log("Connected!"),
  (err) => console.error(err)
);

app.use(express.json());

app.get("/", function (req, res) {
  res.send("Testing my server");
});

//  Creating first table "numbers"
app.get("/create-table", function (req, res) {
  const sql = `
    CREATE TABLE IF NOT EXISTS numbers (
      id INT AUTO_INCREMENT PRIMARY KEY,
      number INT NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    ) ENGINE=INNODB;
  `;
  con.query(sql, function (err, result) {
    if (err) throw err;
    res.send("numbers table created");
  });
});

// Adding a random number ti "numbers" table
app.get("/insert", function (req, res) {
  const number = Math.round(Math.random() * 100);
  const sql = `INSERT INTO numbers (number) VALUES (${number})`;
  con.query(sql, function (err, result) {
    if (err) throw err;
    res.send(`${number} inserted into table`);
  });
});

// Fetching number's table
app.get("/fetch", function (req, res) {
  const sql = `SELECT * FROM numbers`;
  con.query(sql, function (err, result, fields) {
    console.log(result);
    if (err) throw err;
    res.send(JSON.stringify(result));
  });
});

app.use("/api", apiRouter);

app.listen(port, () => {
  console.log(`running on ${port}`);
});

// module.exports = { mysqlConfig };
