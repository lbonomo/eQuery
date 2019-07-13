var nodeExcel = require('excel-export');
var path = require('path');

function ToDateTime(data) {
  if (data === null){
    eOpt.cellType = 'string';
    return ['string', 'N/A'];
  } else {
    let originDate = new Date(Date.UTC(1899,11,30));
    return ['date', (data - originDate) / (24 * 60 * 60 * 1000)];
  }
}

function ProcessRow(data) {
  // Devuelve dos diccionarios
  let columns = Object.keys(data);
  const header = [];
  const row = [];

  columns.forEach( ( key ) => {
    let type = '';
    let value = data[key];

    if ( typeof value === 'object') {
       type = Object.prototype.toString.call(value);
    } else {
      type = typeof value;
    }

    switch (type) {
      case 'number':
        header.push({
          caption:key,
          type:'number',
          width:30
        });
        row.push(value);
        break;

      case 'string':
        header.push({
          caption:key,
          type:'string',
          width: 40
        });
        row.push(value);
        break;

      case '[object Date]':
        let [t,v] = ToDateTime(value);
        header.push({
          caption: key,
          type: t,
          width: 30
        });
        row.push(v);
        break;

      default:
        console.log(type);
    }

  });

  return {
    'header': header,
    'row': row
  };
}




async function excel(data) {
  console.log('Generando el EXCEL');
  // Paso el primer renglon para analizar las cabezeras
  let cols = ProcessRow(data[0]).header;

  // Armo las filas
  let rows = [];
  data.forEach( (row) => {
    // console.log(Object.values(row));
    rows.push(ProcessRow(row).row);
  });


  let conf = {};
  conf.name = "mysheet";
  conf.stylesXmlFile = path.join(__dirname + "/styles.xml");
  console.log(conf.stylesXmlFile);
  conf.cols = cols;
  conf.rows = rows;

  return nodeExcel.execute(conf);
}

module.exports = excel;
