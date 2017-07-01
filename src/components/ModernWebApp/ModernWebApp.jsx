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
      </div>
    );
  }
}

export default ModernWebApp;
