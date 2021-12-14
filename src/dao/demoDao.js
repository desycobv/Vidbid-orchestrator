const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: 'demo'
});

class DemoDao {
  async getAllObjects() {
    const sql = `SELECT * FROM object;`;
    try{
      return await query(sql);
    }catch (e) {
      console.log(e)
      throw e;
    }
  }
  async getObject(id) {
    const sql = `SELECT * FROM object where id = ${id};`;
    try{
      const result = await query(sql);
      return result[0]
    }catch (e) {
      console.log(e)
      throw e;
    }
  }

  async getAllSubObjectsByObjectId(objectId) {
    const sql = `SELECT * FROM sub_object where object_id = ${objectId};`;
    try{
      return await query(sql);
    }catch (e) {
      console.log(e)
      throw e;
    }
  }
  async createObject(objectName) {
    const sql = `INSERT INTO object (name) VALUES ("${objectName}");`;
    try{
      return await query(sql);

    }catch (e) {
      console.log(e)
      throw e;
    }
  }
  async createSubObject(objectId, name, title) {
    const sql = `INSERT INTO sub_object (object_id, name, title) VALUES (${objectId}, "${name}", "${title}")`
    try{
      return await query(sql);

    }catch (e) {
      console.log(e)
      throw e;
    }
  }
  async updateObject(id, name) {
    const sql = `UPDATE object set name = "${name}" where id = ${id} `
    try{
      return await query(sql);
    }catch (e) {
      console.log(e)
      throw e;
    }
  }
  async deleteObject(id) {
    const sql = `DELETE FROM object where id =${id} `
    try{
      return await query(sql);
    }catch (e) {
      console.log(e)
      throw e;
    }
  }
  async deleteSubObject(id) {
    const sql = `DELETE FROM sub_object where id =${id}`
    try{
      return await query(sql);
    }catch (e) {
      console.log(e)
      throw e;
    }
  }
}

function query(sql) {
  return new Promise((resolve, reject) => {
    connection.query(
      sql,
      (err, result) => {
        return err ? reject(err) : resolve(result);
      }
    );
  });
}

module.exports = new DemoDao();