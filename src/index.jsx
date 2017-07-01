import React from 'react';
import ReactDOM from 'react-dom';

import './components/ModernWebApp/ModernWebApp.jsx';

class App extends React.Component {
  shouldComponentUpdate() {
    return true;
  }
  render() {
    return <div>Hello!</div>;
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
