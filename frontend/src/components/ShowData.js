import React from 'react';
import DownloadData from '../components/DownloadData';
import TableRow from '../components/TableRow';
import TableHead from '../components/TableHead';


const ShowData = ({data, Refresh}) => {

  console.log(data);

  let columns = Object.keys(data[0]);
  let rows = data;

  return (

    <div className="mdl-color--white mdl-shadow--2dp mdl-cell mdl-cell--12-col mdl-grid">

      {/* barra de los resultados */}
      <div className="mdl-cell mdl-cell--12-col mdl-grid">
        <div>
          <i onClick={Refresh} className="material-icons" style={{"cursor": "pointer"}}>arrow_back</i>
        </div>
        <div className="mdl-layout-spacer"></div>
        <span className="mdl-layout-title">Result</span>
        <div className="mdl-layout-spacer"></div>
      </div>

      {/* Resultados */}
      <div className="mdl-cell mdl-cell--12-col">
        <div className="ResultTable">
          <table className="mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp">
            <thead><TableHead columns={columns} /></thead>
            <tbody>
              { rows.map( (row, inedex) => { return (
                <TableRow
                  row={Object.values(row)}
                  key={inedex}
                />
              )})}
            </tbody>
          </table>
        </div>

        <div className="form-separator-row"></div>
        <div className="ResultNavBar">
          <div className="mdl-grid">
            <div className="mdl-layout-spacer"></div>

            <div className="form-separator-row max-width-1rem"></div>
            <div >
                <DownloadData data={data} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowData;
