import React from 'react';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

const DownloadData = ({data}) => {

  const Download = () => {
    const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';

    const ws = XLSX.utils.json_to_sheet(data);
    const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] };
    const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    const xlxs_data = new Blob([excelBuffer], {type: fileType});

    FileSaver.saveAs(xlxs_data, "reporte.xlsx");


  }

  console.log(data);
  return(
    <button
      onClick={ Download }
      id="proccess"
      type="submit"
      className="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-button--colored">
      <i className="material-icons">save</i>
    </button>
  );
}

export default DownloadData;
