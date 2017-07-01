import React from 'react';
import ReactDOM from 'react-dom';

import ModernWebApp from './components/ModernWebApp/ModernWebApp.jsx';

import style from './styles/global.css';

class App extends React.Component {
  shouldComponentUpdate() {
    return true;
  }
  render() {
    return (
      <div>
        <div className={style.global}><ModernWebApp /></div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
