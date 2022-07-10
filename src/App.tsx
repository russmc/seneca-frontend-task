import React from 'react';
import './App.css';
import ToggleSwitch from './components/Toggle';
import Options from './options';

function App() {
  
  // works with only two options at the moment
  const q1Options = new Options(
    'q1 correct option',
    'q1 incorrect option'
  )
  
  return (
    <div className="App">
      <ToggleSwitch options={q1Options} />
    </div>
  );
}

export default App;
