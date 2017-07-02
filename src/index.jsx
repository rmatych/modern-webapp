import React from 'react';
import ReactDOM from 'react-dom';

import ModernWebApp from './components/ModernWebApp/ModernWebApp.jsx';

import './styles/bulma.sass';

class App extends React.Component {
  shouldComponentUpdate() {
    return true;
  }
  render() {
    return (
      <div>
        <ModernWebApp />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
