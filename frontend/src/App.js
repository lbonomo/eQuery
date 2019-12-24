import React from 'react';
import { Route, HashRouter } from "react-router-dom";
import QueryEditor from './pages/QueryEditor';
import Configs from './pages/Config';
import Help from './pages/Help';

import Header from './components/Header';
import Navbar from './components/Navbar';

function App() {
   return (

      <HashRouter>
        <div className="mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header">
          < Header />
          < Navbar />
          <main className="mdl-layout__content">
            <div className="page-content mdl-grid">
              <Route exact path="/" component={QueryEditor} />
              <Route exact path="/config" component={Configs} />
              <Route exact path="/help" component={Help} />
            </div>
          </main>
        </div>
      </HashRouter>

   );
}

export default App;
