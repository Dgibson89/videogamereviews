import React from 'react';

function Header() {
    const headerStyle = {
      backgroundColor: '#1F2833',
      color: '#C5C6C7',
      padding: '10px',
      textAlign: 'center',
      // Adjust font size for smaller screens
      fontSize: window.innerWidth < 600 ? '16px' : '24px'
    };
  
    return (
      <header style={headerStyle}>
        <h1>Video Game Reviews</h1>
      </header>
    );
  }
  

export default Header;
