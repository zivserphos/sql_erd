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

const updateClassId = (req, res, next) => {
  try {
    const { prev_id, new_id } = req.params;
    if (isNaN(prev_id) || isNaN(new_id))
      return next({ status: 500, message: "class id should be a number" });

    const sql = `UPDATE class SET id = ${new_id} WHERE id = ${prev_id}`;
    client.query(sql, (err, result, fields) => {
      if (err) throw err;
      res.send(JSON.stringify(result));
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { getClassById, addNewClass, updateClassId };
