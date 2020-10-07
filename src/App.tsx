import React from 'react';
import Navbar from './components/Navbar';

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <main className="container mt-5">
        <h1>App</h1>
      </main>
    </div>
  );
};

export default App;
