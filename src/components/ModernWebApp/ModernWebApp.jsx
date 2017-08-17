import React from 'react';

import Header from '../Header/Header.jsx';

class ModernWebApp extends React.Component {
  shouldComponentUpdate() {
    return true;
  }
  render() {
    return (
      <div>
        <section className="section has-text-centered">
          <Header />
        </section>
        <section className="section has-text-centered">
          <button className="button is-large">Start the tour</button>
        </section>
      </div>
    );
  }
}

export default ModernWebApp;
