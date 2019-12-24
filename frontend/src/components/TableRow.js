import React from 'react';

const TableRow = ({row}) => {
  const rowHTML = row.map( (column, index) => {
    return (<td key={index}>{column}</td>)
  });
  // console.log(listColumns);
  return (<tr>{rowHTML}</tr>);
}

export default TableRow;
