const sql = require('mssql');

// https://www.npmjs.com/package/mssql

async function query(sql_query, config) {

  try {
    await sql.connect(config);
    let result = await sql.query(sql_query);
    sql.close();
    let message = result.recordsets[0];
    return {
      status: "success",
      message: message
    };
  } catch (error) {
    // Si no se puede conectar... timeout, login,...
    return {
      status: "failure",
      message: `Algo salio mal: ${error}`
    };
  }
}

module.exports = query;
