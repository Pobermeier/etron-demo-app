import React from 'react';
import CardItem from '../models/CartItem';

const Cart: React.FC<CartProps> = ({ cart, deleteItem }) => {
  return (
    <div>
      <h2>Shopping Cart</h2>
      <br />
      {cart && cart.length > 0 ? (
        <div className="row">
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Unit Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Total Price</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.name}>
                  <td>{item.name}</td>
                  <td>{item.unitPrice.toFixed(2)}</td>
                  <td>{item.quantity}</td>
                  <td>{item.totalPrice.toFixed(2)}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteItem(item.name)}
                    >
                      Delete Item
                    </button>
                  </td>
                </tr>
              ))}
              <tr>
                <th className="bg-primary">Totals</th>
                <th className="bg-primary">
                  {cart
                    .reduce((acc, item) => acc + +item.unitPrice, 0)
                    .toFixed(2)}
                </th>
                <th className="bg-primary">
                  {cart.reduce((acc, item) => acc + +item.quantity, 0)}
                </th>
                <th className="bg-primary">
                  {cart
                    .reduce((acc, item) => acc + +item.totalPrice, 0)
                    .toFixed(2)}
                </th>
                <th className="bg-primary"></th>
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        <h5 className="text-center pt-5">No items in cart yet</h5>
      )}
    </div>
  );
};

interface CartProps {
  deleteItem: (id: String) => void;
  cart: Array<CardItem>;
}

export default Cart;
