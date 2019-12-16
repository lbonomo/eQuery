import React from 'react';
import QueryEditor from './pages/QueryEditor';
// import Help from './pages/Help';

import Header from './components/Header';
import Navbar from './components/Navbar';

function App() {
   return (
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header">
         < Header />
         < Navbar />
         <main className="mdl-layout__content">
            < QueryEditor />
         </main>
     </div>
   );
}

export default App;
