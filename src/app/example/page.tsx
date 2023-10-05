"use client";

import ProductItem from "@/components/product-item/product-item";

import UseCallbackComponent from "@/components/use-callback-component/use-callback-component";
import UseStateComponent from "@/components/use-state-component/use-state-component";
import UseContextComponent from "@/components/use-context-component/use-context-component";

export default function Example() {
  return (
    <main className='container mx-auto my-10'>
      <div className='grid grid-cols-1 gap-10'>
        <div>
          <h1 className='text-2xl font-medium mb-6'>Example Components</h1>
          <div className='grid grid-cols-4 gap-6'>
            {Array.from({ length: 8 }).map((_, i) => (
              <ProductItem key={i} />
            ))}
          </div>
        </div>
        <div className='bg-gray-50 p-10 rounded-lg border'>
          <h1 className='text-2xl font-medium mb-6'>useCallback()</h1>
          <UseCallbackComponent />
        </div>
        <div className='bg-gray-50 p-10 rounded-lg border'>
          <h1 className='text-2xl font-medium mb-6'>useContext()</h1>
          <UseContextComponent />
        </div>
        <div className='bg-gray-50 p-10 rounded-lg border'>
          <h1 className='text-2xl font-medium mb-6'>useState()</h1>
          <UseStateComponent />
        </div>
      </div>
    </main>
  );
}
