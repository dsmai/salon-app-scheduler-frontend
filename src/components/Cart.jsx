import React from "react";

const Cart = ({ selectedServices, user}) => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">In {user ? (user) : ("your")} cart:</h1>
      <ul>
        {selectedServices.map((s) => {
          return (
            <li key={s.id}>
              {s.name} ${s.price}
            </li>
          );
        })}
      </ul>
      <div>
        Total: $
        {selectedServices.reduce((accumulator, s) => accumulator + s.price, 0)}
      </div>
    </div>
  );
};

export default Cart;
