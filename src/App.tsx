import React from 'react';
import './App.css';
import Toggles from './components/Toggles';
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

  const optionsArray = [q1Options, q2Options, q3Options];
  
  return (
    <div className="App">
      <Toggles optionsArray={optionsArray}/>
    </div>
  );
}

export default App;
