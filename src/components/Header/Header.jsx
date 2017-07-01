import React from 'react';

import style from './Header.css';

class Header extends React.PureComponent {
  render() {
    return (
      <div>
        <h1 className={style.header}>Modern Webapp</h1>
      </div>
    );
  }
}

export default Header;
