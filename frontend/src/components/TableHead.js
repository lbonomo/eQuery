import React from 'react';

const TableHead = ({columns}) => {
  console.log(columns)
  const listColumns = columns.map( (column, key) => {
    return (<th key={key}>{column}</th>)
  });
  // console.log(listColumns);
  return (
    <tr>{listColumns}</tr>
  );
}

export default TableHead;
