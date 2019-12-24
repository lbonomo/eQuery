import React, { useState } from 'react';

const SQLEditor = ({sqlQuery}) => {

  const [query, setQuery] = useState('');
  const [bState, setbState] = useState(true);

  // Capturo el onChange y actualizo el valor del SQL Query
  const handleChange = (event) => {
     // setQuery(event.target.value)
     if (event.target.value.length >= 1 ) {
       setbState(false);
     } else {
       setbState(true);
     }
     setQuery(
       event.target.value);
  };

  // Form submit
  const handleSubmit = async (event) => {
    event.preventDefault();
    // Disable button
    setbState(true);
    await sqlQuery(query);
    // Enabled button
    setbState(false);
  }

  return(

    <form
      onSubmit={handleSubmit}
    >
     <div className="mdl-cell mdl-cell--12-col">
        <label>Editor SQLX:</label>
        {/* TODO - Coloreado de sintaxis */}
        <textarea
        value={query}
        onChange={handleChange}
        className="mdl-textfield__input EditSQLX"
        type="text"
        name="sql_query"
        id="sql"
        refs="SQL_Query"
        rows="8"></textarea>
     </div>

     <div className="mdl-grid">
        <div className="mdl-layout-spacer"></div>
        <div className="submit">
           <button
           // disabled
           disabled={bState}
           id="proccess"
           type="submit"
           className="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-button--colored">
           <i className="material-icons">send</i>
           </button>
        </div>
     </div>

   </form>
  )
}

export default SQLEditor;
