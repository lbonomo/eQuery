import React from 'react';

const Navbar = () => {
   return (
     <div className="demo-drawer mdl-layout__drawer mdl-color--white mdl-color-text--grey-800">
       <header className="demo-drawer-header">
         <img className="equery-logo" src="images/logo.svg" alt="logo..."  />
       </header>

       <nav className="demo-navigation mdl-navigation">
         <a className="mdl-navigation__link" href="custom">
           <i className="material-icons" role="presentation">edit</i>Custom
         </a>

         <a className="mdl-navigation__link" href="help">
           <i className="material-icons" role="presentation">help</i>Help
         </a>
       </nav>
     </div>
   )
 }

 export default Navbar;
