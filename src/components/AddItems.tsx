import React, { useState } from 'react';
import Product from '../models/Product';

const AddItems: React.FC<AddItemsProps> = ({ addItem }) => {
  const [products, setProducts] = useState([
    { name: 'apple', price: 4 },
    { name: 'banana', price: 6.2 },
    { name: 'strawberry', price: 2 },
    { name: 'banana', price: 6.2 },
    { name: 'banana', price: 6.2 },
    { name: 'banana', price: 6.2 },
    { name: 'banana', price: 6.2 },
    { name: 'banana', price: 6.2 },
    { name: 'banana', price: 6.2 },
    { name: 'banana', price: 6.2 },
  ]);

  return (
    <div>
      <h2>Add Items To Cart</h2>
      <br />
      <form action="POST" onSubmit={(e) => e.preventDefault()}>
        <div className="form-group">
          <textarea
            name="items"
            cols={30}
            rows={5}
            className="form-control"
          ></textarea>
        </div>
      </form>
      <br />
      <div className="row">
        {products.map((product, index) => (
          <div key={index} className="col-3 mt-2">
            <button
              className="btn btn-primary"
              onClick={() =>
                addItem({ name: product.name, price: product.price })
              }
            >
              {product.name} ({product.price.toFixed(2)})
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

interface AddItemsProps {
  addItem: (product: Product) => void;
}

export default AddItems;
