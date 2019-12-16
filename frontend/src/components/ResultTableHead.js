import React from 'react';

const ResultTableHead = ({props}) => {
   let head = props;
   return (
      <th key={head}>Name</th>
   );
}

export default ResultTableHead;