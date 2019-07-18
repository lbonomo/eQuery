const sql = require('mssql');
const config = require('../config.json');


async function query(sql_query) {


    // var connection = mssql.connect(dbConfig, function (err) {
    //   if (err)
    //       throw err;
    //   });

    try {
        console.log("...");
        // if
        // await sql.close();
        let pool = await sql.connect(config.mssql);
        let result = await sql.query(sql_query);
        let query_result = result.recordsets[0];
        sql.close();
        console.log('Se ejecuto correctaemnte la consulta');
        // console.log(terminales)
        // console.log(`Columnas=${Object.keys(terminales[0])}`);
        // terminales.forEach( (element) => {
        //   console.log(element);
        // });

        return query_result;
    } catch (err) {
        console.log("Error!");
        console.log(err);
        return {
          status: error,
          message: err
        };
    }
}

module.exports = query;
