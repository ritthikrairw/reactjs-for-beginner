"use client";

import { useState } from "react";

/**
 * Renders a form with an input field and a label for the name.
 * Uses the useState hook to create a state variable called 'name' and a function called 'setName' to update the state.
 * The initial value of 'name' is set to "John Doe".
 * The value of the input field is bound to the 'name' state variable, and whenever the input value changes,
 * the 'setName' function is called to update the 'name' state. The updated 'name' is then displayed below the input field.
 */
export function UseStateComponent() {
  const [name, setName] = useState<string>("John Doe");

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  return (
    <div>
      <div className='mb-2'>
        <label htmlFor='name' className='block font-medium mb-1 text-sm'>
          Name
        </label>
        <input
          id='name'
          className='border p-2 rounded-lg'
          value={name}
          type='text'
          onChange={handleNameChange}
        />
      </div>
      <span className='text-gray-500 text-sm'>My name is {name}</span>
    </div>
  );
}

export default UseStateComponent;
