const sql = require('mssql');
const config = require('../config.json');


async function query(sql_query) {
    try {
        console.log("...");
        let pool = await sql.connect(config.mssql);
        let result = await sql.query(sql_query);
        let query_result = result.recordsets[0];
        console.log('Se ejecuto correctaemnte la consulta');
        // console.log(terminales)
        // console.log(`Columnas=${Object.keys(terminales[0])}`);
        // terminales.forEach( (element) => {
        //   console.log(element);
        // });
        return query_result;
    } catch (err) {
        console.log("Error!");
        return "Error";
    }
}

module.exports = query;
