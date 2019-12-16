import React from 'react';

const Header = () => {
   return (
     <header className="demo-header mdl-layout__header mdl-color--white mdl-color-text--grey-800">
       <div aria-expanded="false" role="button" tabIndex="0" className="mdl-layout__drawer-button">
         <i className="material-icons"></i>
       </div>

      <div className="mdl-layout__header-row">
         <span className="mdl-layout-title">Home</span>
         <div className="mdl-layout-spacer"></div>
       </div>
     </header>


   )
}

export default Header;
