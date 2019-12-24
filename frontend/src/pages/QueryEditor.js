import React, { useState } from 'react';

import SQLEditor from '../components/SQLEditor';
import SQLError from '../components/SQLError';
import ShowData from '../components/ShowData';

function QueryEditor() {
  // Functional component

  const [data, setData] = useState('');
  const [displayEditor, setDisplayEditor] = useState('unset');

  const sqlQuery = async(query) => {
    // Esta funcion se encarga de consultar el API y acutalizar el "state" data

    // TODO - Leo la configuracion
    const apiProtocol = "http";
    const apiServer = "localhost";
    const apiPort = 5555;
    const apiPath = "api/v1"

    let url=`${apiProtocol}://${apiServer}:${apiPort}/${apiPath}/sql`;

    // Fetch API no soporta un body en un GET y no quiero envierlo en la URL
    let sqlData = await fetch(url, {
      method: 'POST', // or 'PUT'
      body: JSON.stringify({query:query}),
      headers:{
        'Content-Type': 'application/json; charset=utf-8'
      }
    })
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      return myJson
    });

    setData(sqlData);

    if ( sqlData.hasOwnProperty("status") || sqlData.status === 'success' ) {
      setDisplayEditor('none');
    }

  }

  const Refresh = () => {
    console.log("Refrech")
    setData('');
    setDisplayEditor('unset');
  }


  const showDataTable = (data) => {
    // Muestro de forma condicional
    if ( data.hasOwnProperty("status") ) {
      switch (data.status) {
        case 'failure':
          return( <SQLError message={data.message} />);
          // break; //unreachable code no-unreachable... Unreachable 'break' after 'return'
        case 'success':
          return(<ShowData data={data.message} Refresh={Refresh} />);
          // break; //unreachable code no-unreachable... Unreachable 'break' after 'return'
        default:
          return(<p> Algo salio mal: {data.status}</p>);
      }
    }
  }

  return (
    <React.Fragment>
      <div
        className="mdl-color--white mdl-shadow--2dp mdl-cell mdl-cell--12-col mdl-grid"
        style={{ display: displayEditor }}
      >
        <div className="mdl-cell mdl-cell--12-col">
          <h3>Code</h3>
        </div>
        <div className="mdl-cell mdl-cell--12-col">
          < SQLEditor sqlQuery={sqlQuery} />
        </div>
      </div>

      {showDataTable(data)}

    </React.Fragment>
  )

}

export default QueryEditor;
