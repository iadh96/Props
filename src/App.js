import './App.css';
import React from 'react'
import Profile from'./profile/profile component.js';
function App() {
  const handleName = name => alert(name);
  return (
    <div className="App">
      <Profile FullName= 'John Doe' handleName={handleName} Bio='Info' Profession= 'Developper'  />
    </div>
  );
}

export default App
