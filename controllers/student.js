const { client } = require("../db/index");

const getStudentByID = (req, res, next) => {
  try {
    const { id } = req.params;
    const sql = `Select * from student
                Where id=${id}`;
    client.query(sql, (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  } catch (err) {
    console.log(err);
  }
};

const addNewStudent = (req, res, next) => {
  try {
    const { name, class_id } = req.body;
    const sql = `Insert INTO student (name, class_id) VALUES ("${name}" , ${class_id})`;
    client.query(sql, (err, result, fields) => {
      if (err) throw err;
      res.send(JSON.stringify(result));
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = { getStudentByID, addNewStudent };
