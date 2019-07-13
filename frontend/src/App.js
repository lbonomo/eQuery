import React from 'react';
import QueryEditor from './components/QueryEditor';
import Header from './components/Header';

function App() {
   return (
      <div class="mdl-layout mdl-js-layout mdl-layout--fixed-drawer">
            < Header />
            < QueryEditor />
     </div>
   );
}

export default App;
