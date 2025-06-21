import React from 'react';
import Counter from './components/Counter';

function App() {
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center vh-100">
      <h2 className="mb-4 fw-bold text-primary"> Counter App</h2>
      <Counter />
    </div>
  );
}

export default App;
