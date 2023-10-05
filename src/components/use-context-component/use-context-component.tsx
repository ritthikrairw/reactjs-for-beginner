"use client";

import classNames from "classnames";
import { createContext, useContext, useState } from "react";
import ProductItem from "../product-item/product-item";

export const ThemeContext = createContext("light");

export function UseContextComponent() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={theme}>
      <div
        className={classNames("p-6 my-4 rounded-md", {
          "bg-slate-800 text-white": theme === "dark",
          "bg-white/80 text-base": theme === "light",
        })}
      >
        <h1 className='text-xl'>Title</h1>
        <p className='text-sm'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className='grid grid-cols-4 gap-10 my-4'>
        {Array.from({ length: 4 }).map((_, i) => (
          <ProductItem key={i} />
        ))}
      </div>
      <button
        className='p-2 leading-none border rounded-md'
        onClick={() => {
          setTheme(theme === "dark" ? "light" : "dark");
        }}
      >
        Toggle theme
      </button>
    </ThemeContext.Provider>
  );
}

export default UseContextComponent;
