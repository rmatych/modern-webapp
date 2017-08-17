import React from 'react';

class Header extends React.PureComponent {
  render() {
    return (
      <div>
        <h1 className="title">Modern Webapp</h1>
        <h2 className="subtitle">An opinionated frontend boilerplate</h2>
      </div>
    );
  }
}

export default Header;
