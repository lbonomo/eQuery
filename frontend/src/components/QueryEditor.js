import React, { Component } from 'react';

class QueryEditor extends Component {

   state = {
      sql_query: '',
      raw_file: ''
   }

   // Envio la consulta al API

   downloadXLSX = (blob) => {
      // Hacemos la clasica de generar un A y darle click para forzar la descarga
      // con los datos enviados del API
      const a = document.createElement("a");
      a.style.display = "none";
      document.body.appendChild(a);
      a.href = window.URL.createObjectURL(blob);
      a.setAttribute("download", 'reporte.xlsx');
      a.click();
   }

   runSQL = async(event) => {
      event.preventDefault();
      console.log(this.state.sql_query);

      // TODO - Falta capturar los errores
      // TODO - Leer la configuracion del servidor del API y el puerto

      const response = await fetch('http://localhost:5555/query/', {
         method: 'POST',
         headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
         },
         body: JSON.stringify({
            sql: this.state.sql_query
         })
      }).then( (response) => { return response.blob() }).then(function(blob) { return blob });

      this.downloadXLSX(response);

   }

   // Capturo el onChange y actualizo el valor del SQL Query
   textareaHandleChange = (event) => {
      const{name, value} = event.target;
      this.setState({ [name]:value });
   };

   render() {
      return (

<main class="mdl-layout__content">
        <div class="page-content">
           
      <div className="mdl-cell mdl-cell--12-col">
         <form>
            <div className="form-separator-row"></div>
            
            <div className="mdl-grid">
               <label>Editor SQLX:</label>
               {/* TODO - Coloreado de sintaxis */}
               <textarea
               value={this.state.sql_query}
               onChange={this.textareaHandleChange}
               className="mdl-textfield__input EditSQLX"
               type="text"
               name="sql_query"
               id="sql"
               refs="SQL_Query"
               rows="8"></textarea>
            </div>
            
            <div className="form-separator-row"></div>
            
            <div className="mdl-grid">
         
               <div className="mdl-layout-spacer"></div>
               <div className="submit">
                  <button
                  // disabled
                  onClick={this.runSQL}
                  id="proccess"
                  type="submit"
                  className="mdl-button mdl-js-button mdl-button--fab mdl-button--colored">
                  <i className="material-icons">play_arrow</i>
                  </button>
               </div>               
            </div>
         </form>
      </div>
      </div>         
      </main>      
     )
   }
}

export default QueryEditor;
