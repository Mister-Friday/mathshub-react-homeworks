import React, { useState } from 'react';
import './Counter.css';

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className="counter-container">
      <p>Счетчик: {count}</p>
      <button
        className="counter-button"
        onClick={() => {
          if (
            count > 0 ? setCount(count - 1) : alert('ДОВОЛЬНО СКУКОЖИВАТЬ!!!')
          );
        }}
      >
        Скукожить
      </button>
      <button
        className="counter-button"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Раскукожить
      </button>
    </div>
  );
}

export default Counter;
