import axios from "axios";
import React from "react";

const Cart = ({ selectedServices, user }) => {
  const handleCheckout = () => {
    console.log(`checkout for ${user}, total of $ ${total}`);
    // send the order to the backend server
    axios.post("http://localhost:3001/api/checkout", {user, total})
    .then(res => console.log(res.data));
  };

  let total = selectedServices.reduce(
    (accumulator, s) => accumulator + s.price,
    0
  );

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold underline">
        In {user ? user : "your"} cart:
      </h1>
      <ul className="space-y-4 border-b border-gray-300 pb-4">
        {selectedServices.map((s) => {
          return (
            <li key={s.id}>
              {s.name} ${s.price}
            </li>
          );
        })}
      </ul>
      <div>Total: ${total}</div>
      <button
        onClick={handleCheckout}
        className="px-4 py-2 rounded-md bg-blue-500 text-white font-semibold transition-transform transform hover:scale-105 hover:shadow-lg"
      >
        Checkout
      </button>
    </div>
  );
};

export default Cart;
