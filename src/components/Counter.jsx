import React, { useEffect, useState } from 'react';
import '../styles/counter.css';

const Counter = () => {
  const [count, setCount] = useState(() => {
    const stored = localStorage.getItem('counter');
    return stored ? parseInt(stored, 10) : 0;
  });
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    localStorage.setItem('counter', count);
  }, [count]);

  const handleIncrement = () => {
    triggerAnimation();
    setCount((prev) => prev + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      triggerAnimation();
      setCount((prev) => prev - 1);
    }
  };

  const handleReset = () => {
    setCount(0);
    triggerAnimation();
  };

  const triggerAnimation = () => {
    setAnimate(true);
    setTimeout(() => setAnimate(false), 300);
  };

  return (
    <div className="card shadow p-4 text-center" style={{ maxWidth: '400px', width: '100%' }}>
      <h1 className={`display-3 fw-bold ${animate ? 'count-animate' : ''}`}>
        {count}
      </h1>
      <div className="mt-4 d-flex justify-content-between gap-3 flex-wrap">
        <button className="btn btn-success w-100" onClick={handleIncrement}>Increment</button>
        <button className="btn btn-warning w-100" onClick={handleDecrement} disabled={count === 0}>Decrement</button>
        <button className="btn btn-danger w-100" onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;
