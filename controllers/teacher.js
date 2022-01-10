const { client } = require("../db/index");

const getTeacherByID = (req, res, next) => {
  try {
    const { id } = req.params;
    const sql = `WITH teacher_sub_teach as (SELECT id, name, subject_id FROM teacher LEFT JOIN subject_teach ON id = teacher_id)
    SELECT teacher_sub_teach.id, teacher_sub_teach.name, GROUP_CONCAT(subject.name) as subject FROM teacher_sub_teach LEFT JOIN subject ON teacher_sub_teach.subject_id = subject.id WHERE teacher_sub_teach.id = ${id}`;
    client.query(sql, (err, result, _fields) => {
      if (err) throw err;
      res.send(JSON.stringify(result));
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = getTeacherByID;
