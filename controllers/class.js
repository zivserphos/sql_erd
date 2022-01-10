const { client } = require("../db/index");
const getClassById = (req, res, next) => {
  try {
    const { id } = req.params;
    const sql = `SELECT class_id, name AS Students
          FROM student
            WHERE class_id=${id}
            GROUP BY students`;
    client.query(sql, function (err, result, fields) {
      console.log(result);
      if (err) {
        throw err;
      }
      res.send(JSON.stringify(result));
    });
  } catch (error) {
    console.log(error);
  }
};

const addNewClass = (req, res, next) => {
  const { id } = req.params;
  const sql = `INSERT INTO class values (${id})`;
  try {
    client.query(sql, (err, result) => {
      if (err) throw err;
      res.send(JSON.stringify(result));
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = { getClassById, addNewClass };
