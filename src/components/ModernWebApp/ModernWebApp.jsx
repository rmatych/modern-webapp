import React from 'react';

import Header from '../Header/Header.jsx';
import Summary from '../Summary/Summary.jsx';

class ModernWebApp extends React.Component {
  shouldComponentUpdate() {
    return true;
  }
  render() {
    return (
      <div>
        <Header />
        <Summary />
        <div className="block">
          <a className="button">Button</a>
          <a className="button is-white">White</a>
          <a className="button is-light">Light</a>
          <a className="button is-dark">Dark</a>
          <a className="button is-black">Black</a>
          <a className="button is-link">Link</a>
        </div>
        <div className="block">
          <a className="button is-primary">Primary</a>
          <a className="button is-info">Info</a>
          <a className="button is-success">Success</a>
          <a className="button is-warning">Warning</a>
          <a className="button is-danger">Danger</a>
        </div>
      </div>
    );
  }
}

export default ModernWebApp;
