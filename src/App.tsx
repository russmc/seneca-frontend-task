import React from 'react';
import './App.css';
import ToggleSwitch from './components/Toggle';
import Options from './options';

function App() {
  
  // works with only two options at the moment
  const q1Options = new Options(
    'correct',
    [
      'incorrect',
      'incorrect',
    ]
  )
  
  return (
    <div className="App">
      <ToggleSwitch options={q1Options} />
    </div>
  );
}

export default App;
