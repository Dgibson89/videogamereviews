import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const appStyle = {
    display: 'grid',
    gridTemplateRows: 'auto 1fr auto', // Header, content, footer
    minHeight: '100vh' // Full viewport height
  };

  return (
    <div style={appStyle}>
      <Header />
      {/* Your main content will go here */}
      <Footer />
    </div>
  );
}


export default App;
