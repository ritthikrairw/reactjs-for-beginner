"use client";

import { useReducer, useState } from "react";

type CartItem = {
  id: number;
  name: string;
  price: number;
};

export function cartReducer(
  state: CartItem[],
  action: { type: "add" | "remove"; payload: CartItem }
) {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    case "remove":
      return state.filter((item) => item.id !== action.payload.id);
    default:
      return state;
  }
}

export function UseReducerComponent() {
  const [cart, dispatch] = useReducer(cartReducer, [
    {
      id: 1,
      name: "Item 1",
      price: 9.99,
    },
    {
      id: 2,
      name: "Item 2",
      price: 9.99,
    },
  ]);

  const addItem = () => {
    const id = Math.random();
    dispatch({
      type: "add",
      payload: {
        id: id,
        name: `Item ${id}`,
        price: 9.99,
      },
    });
  };

  const removeItem = (item: CartItem) => {
    dispatch({ type: "remove", payload: item });
  };

  return (
    <div>
      <h2 className='font-medium text-lg mb-4'>Shopping Cart</h2>
      <ul className='mb-4'>
        {cart && cart.length > 0 ? (
          cart.map((item) => (
            <li key={item.id} className='flex gap-2'>
              <span>{item.name}</span>
              <span>${item.price}</span>
              <button className='text-red-500' onClick={() => removeItem(item)}>
                Remove
              </button>
            </li>
          ))
        ) : (
          <li>No items in cart</li>
        )}
      </ul>
      <button
        className='px-4 py-2 leading-none rounded-md bg-white shadow-sm border border-gray-100'
        onClick={() => addItem()}
      >
        Add Item
      </button>
    </div>
  );
}

export default UseReducerComponent;
