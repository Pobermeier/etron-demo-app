import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import AddItems from './components/AddItems';
import Product from './models/Product';
import CardItem from './models/CartItem';

const App: React.FC = () => {
  const [cart, setCart] = useState<CardItem[]>([]);

  const addItem = (product: Product) => {
    const { name, price } = product;

    const found = cart.find((item) => item.name === name);

    if (found) {
      found.quantity = +found.quantity + 1;
      found.unitPrice = price;
      found.totalPrice = +found.quantity * +found.unitPrice;

      setCart((prevCart) =>
        prevCart.map((item) => (item.name === found.name ? found : item)),
      );
    } else {
      const newItem = {
        name,
        unitPrice: price,
        totalPrice: price,
        quantity: 1,
      };

      setCart((prevCart) => [...prevCart, newItem]);
    }
  };

  const deleteItem = (name: String) => {
    setCart((prevCart) => prevCart.filter((item) => item.name !== name));
  };

  return (
    <div>
      <Navbar />
      <main className="container mt-5">
        <div className="row">
          <div className="col-7 pr-5">
            <Cart cart={cart} deleteItem={deleteItem} />
          </div>
          <div className="col-5 pl-5">
            <AddItems addItem={addItem} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
