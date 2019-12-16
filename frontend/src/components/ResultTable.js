import NoData from './NoData';
import ShowData from './ShowData';

// import ResultTableHead from './ResultTableHead';
// import ResultTableCell from './ResultTableCell';

const ResultTable = ( props ) => {
  const data = props.data;

   if ( data.length >= 1 ) {
     return ShowData(data);
   } else {
     return NoData();
   }
};

export default ResultTable;
