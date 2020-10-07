import React from 'react';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import AddItems from './components/AddItems';

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <main className="container mt-5">
        <div className="row">
          <div className="col">
            <Cart />
          </div>
          <div className="col">
            <AddItems />
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
