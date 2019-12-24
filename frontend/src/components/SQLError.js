import React from 'react';

const SQLError = ({message}) => {
  return(
    <div className="mdl-grid">
      <div className="mdl-layout-spacer"></div>
      <p>{message}</p>
      <div className="mdl-layout-spacer"></div>
    </div>
  );
}

export default SQLError;
