import React, { useState } from 'react';
import MyContent from './components/Main';
import './App.css';

function App() {
  const [showComponent, setShowComponent] = useState(false);

  const handleClick = () => {
    setShowComponent(true);
  }

  const buttonStyle = {
    marginTop: '200px',
    borderRadius: '4px',
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#5dbea3',
    color: 'white',
    transition: 'background-color 0.3s ease',
    animation: 'pulse 2s infinite',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
  };
  
 

  const fadeInAnimation = {
    animationName: 'fadeIn',
    animationDuration: '1s',
  };

  return (
    <div className="App">
      {showComponent ? (
        <div style={fadeInAnimation}> 
          <MyContent/>
        </div>
      ) : (
        <button style={buttonStyle} onClick={handleClick}>Submit</button>
      )}
    </div>
  );
}

export default App;
