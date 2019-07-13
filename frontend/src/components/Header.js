import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div class="mdl-layout__drawer">
        <span class="mdl-layout-title">eQuery</span>
        <nav class="mdl-navigation">
          {/* <a class="mdl-navigation__link" href="">Link</a>
          <a class="mdl-navigation__link" href="">Link</a>
          <a class="mdl-navigation__link" href="">Link</a> */}
         <a class="mdl-navigation__link" href="">Custom query</a>
        </nav>
      </div>

    )
  }
}

export default Header;
