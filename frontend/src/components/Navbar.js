import React from 'react';
import {
  NavLink,
} from "react-router-dom";
// Iconos
// https://material.io/resources/icons/?icon=build&style=baseline

// Imagen en la barra lateral
// <header className="demo-drawer-header">
//    <img className="equery-logo" src="images/logo.svg" alt="logo..."  />
// </header>

const Navbar = () => {
   return (
     <div className="demo-drawer mdl-layout__drawer mdl-color--white mdl-color-text--grey-800">

       <nav className="demo-navigation mdl-navigation">

           <NavLink exact to="/" className="mdl-navigation__link">
             <i className="material-icons" role="presentation">code</i>Custom
           </NavLink>

           <NavLink exact to="/config" className="mdl-navigation__link">
             <i className="material-icons" role="presentation">settings</i>Settings
           </NavLink>

           <NavLink exact to="/help" className="mdl-navigation__link">
             <i className="material-icons" role="presentation">help</i>Help
           </NavLink>

       </nav>

     </div>
   )
 }

 export default Navbar;
