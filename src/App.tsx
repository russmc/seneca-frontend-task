import React from 'react';
import './App.css';
import ToggleSwitch from './components/Toggle';
import Options from './options';

function App() {
  const q1Options = new Options(
    'q1 option a',
    'q1 option b'
  )
  
  return (
    <div className="App">
      <ToggleSwitch options={q1Options} />
    </div>
  );
}

export default App;
