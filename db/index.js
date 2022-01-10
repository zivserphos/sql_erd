const mysql = require("mysql2");
const fs = require("fs");
const sqlConfig = {
  host: process.env.MYSQL_DATABASE || "mysql_server",
  user: process.env.MYSQL_USER || "student",
  password: process.env.MYSQL_PASSWORD || "secret",
  database: process.env.MYSQL_ROOT_PASSWORD || "test_db",
};
const client = mysql.createConnection(sqlConfig);

function connect() {
  return new Promise((res, rej) => {
    client.connect((err) => {
      if (err) {
        rej(err);
      }
      res();
    });
  });
}

// const queries = (() => {
//   const data = {};
//   fs.readdir(`${__dirname}//queries`, (err, files) => {
//     files.forEach((file) => {
//       data[file.split(".")[0]] = fs.readFileSync(
//         `${__dirname}//queries//${file}`,
//         {
//           encoding: "utf8",
//           flag: "r",
//         }
//       );
//     });
//   });
//   return data;
// })();

function query(sql) {
  throw new Error("Function not implemented.");
}

module.exports = { connect, client, query };
