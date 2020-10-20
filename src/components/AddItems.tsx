import React, { useState } from 'react';
import Product from '../models/Product';

const AddItems: React.FC<Props> = ({ addItem }) => {
  const [products, setProducts] = useState<(Product | null)[]>([]);

  const addProduct = (text: string) => {
    let arr = text.trim().split(', ');
    arr = arr.map((string) => string.trim().replace(',', ''));

    if (arr.length <= 1) {
      setProducts([]);
    }

    if (arr.length % 2 === 0) {
      const products = arr
        .map((item, index, arr) => {
          if ((index + 1) % 2 === 0) {
            const product = {
              name: arr[index - 1],
              price: parseFloat(item),
            };

            return product as Product;
          } else return null;
        })
        .filter((v) => v !== null);

      setProducts(products);
    }
  };

  return (
    <div>
      <h2>Add Items To Cart</h2>
      <p>
        Add items to the text area below as a comma-separated list (e.g. "apple,
        4, banana, 6.2, strawberry, 2"):
      </p>
      <br />
      <form action="POST" onSubmit={(e) => e.preventDefault()}>
        <div className="form-group">
          <textarea
            name="items"
            cols={30}
            rows={5}
            className="form-control"
            onChange={(e) => addProduct(e.target.value)}
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
                addItem({ name: product!.name, price: product!.price })
              }
            >
              {product!.name} ({product!.price.toFixed(2)})
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

interface Props {
  addItem: (product: Product) => void;
}

export default AddItems;
