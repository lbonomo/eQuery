import React from 'react';

const ShowData = (data) => {
  console.log(data);

  // data[0] es un objeto
  let headers = Object.keys(data[0]);
  console.log(headers);

  // TODO - Pre-procesar data para mejorar el formato de la hora.

  return (
    <div className="mdl-cell mdl-cell--12-col SQLResult">
      <div className="ResultTable">
        <table className="mdl-data-table mdl-js-data-table">
          <thead>
            <tr>
              { headers.map( (value, key) => <th key={key}>{value}</th> )}
            </tr>
          </thead>
          <tbody>
            {
              // DATA
              data.map(
                // ROW
                (row, key) => {
                  return(<tr key={key}>{Object.values(row).map(
                    // CELL
                    (value, key) => <td key={key}>{value}</td>)}</tr>
                  )
                })
            }
            </tbody>
          </table>
        </div>

        <div className="form-separator-row"></div>

        <div className="ResultNavBar">
          <div className="mdl-grid">
            <div className="mdl-layout-spacer"></div>

            <div className="submit">
              <button
                // disabled
                // onClick={this.runSQL}
                id="proccess"
                type="submit"
                className="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-button--colored">
                <i className="material-icons">save</i>
              </button>
            </div>
          </div>
        </div>
      </div>
    );

}

export default ShowData;
