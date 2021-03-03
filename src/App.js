import React, { useState } from 'react';
import './App.css';
import Example from './Example';
import { Swiper } from './Swiper';
import Testing from './Testing';

function App() {

  const [count, setCount] = useState(0);

  return (
    <>
      <Swiper />
      {/* <div className="app"> */}
        {/* <div className="example__container">
          <Example count={count} setCount={setCount} key={count} />
        </div> */}
        {/* <div className="example__container">
          <Testing />
        </div>
        <div className="example__container">
          <Swiper />
        </div>
      </div> */}
    </>
  );
}

export default App;
