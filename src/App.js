import React, { useState } from 'react';
import './App.css';
import Example from './Example';
import Testing from './Testing';

function App() {

  const [count, setCount] = useState(0);

  return (
    <>
      <div className="app">
        {/* <div className="example__container">
          <Example count={count} setCount={setCount} key={count} />
        </div> */}
        <div className="example__container">
          <Testing />
        </div>
      </div>
    </>
  );
}

export default App;
