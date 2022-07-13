import React from 'react';
import './App.css';
import ToggleSwitch from './components/Toggle';
import Options from './options';

function App() {
  
  // works with one correct option at the moment
  // number of incorrect options must be manually updated in css
  const q1Options = new Options(
    'q1correct',
    [
      'q1incorrect',
      'q1incorrect',
    ]
  )

  const q2Options = new Options(
    'q2correct',
    [
      'q2incorrect',
      'q2incorrect',
    ]
  )

  const q3Options = new Options(
    'q3correct',
    [
      'q3incorrect',
      'q3incorrect',
    ]
  )
  
  return (
    <div className="App">
      <ToggleSwitch key={1} toggleIndex={1} options={q1Options} />
      <ToggleSwitch key={2} toggleIndex={2} options={q2Options} />
      <ToggleSwitch key={3} toggleIndex={3} options={q3Options} />
    </div>
  );
}

export default App;
