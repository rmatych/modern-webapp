import React from 'react';

import Header from '../Header/Header.jsx';

class ModernWebApp extends React.Component {
  shouldComponentUpdate() {
    return true;
  }
  render() {
    return (
      <Header />
    );
  }
}

export default ModernWebApp;
