"use client";

import { useEffect, useState } from "react";

export function UseEffectComponent() {
  const [name, setName] = useState("John Doe");
  const [errors, setErrors] = useState<string[]>([]);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  useEffect(() => {
    if (name !== "John Doe") {
      setErrors(["Name is not John Doe!!"]);
    } else {
      setErrors([]);
    }
  }, [name]);
  return (
    <div className=''>
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
      {errors?.map((error, i) => (
        <p key={i} className='text-sm text-red-600'>
          {error}
        </p>
      ))}
    </div>
  );
}

export default UseEffectComponent;
