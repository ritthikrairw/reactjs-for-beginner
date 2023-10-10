"use client";

import ProductItem from "@/components/product-item/product-item";

import UseCallbackComponent from "@/components/use-callback-component/use-callback-component";
import UseStateComponent from "@/components/use-state-component/use-state-component";
import UseContextComponent from "@/components/use-context-component/use-context-component";
import UseEffectComponent from "@/components/use-effect-component/use-effect-component";
import UseMemoComponent, {
  UseMemoNoCacheComponent,
} from "@/components/use-memo-component/use-memo-component";
import UseReducerComponent from "@/components/use-reducer-component/use-reducer-component";

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
          <h1 className='text-2xl font-medium mb-6'>useEffect()</h1>
          <UseEffectComponent />
        </div>
        <div className='bg-gray-50 p-10 rounded-lg border'>
          <h1 className='text-2xl font-medium mb-6'>useMemo()</h1>
          <div className='grid grid-cols-2 gap-4'>
            <div>
              <h2 className='text-xl font-medium mb-6'>Without Cache</h2>
              <UseMemoNoCacheComponent />
            </div>
            <div>
              <h2 className='text-xl font-medium mb-6'>With Cache</h2>
              <UseMemoComponent />
            </div>
          </div>
        </div>
        <div className='bg-gray-50 p-10 rounded-lg border'>
          <h1 className='text-2xl font-medium mb-6'>useState()</h1>
          <UseStateComponent />
        </div>
        <div className='bg-gray-50 p-10 rounded-lg border'>
          <h1 className='text-2xl font-medium mb-6'>useReducer()</h1>
          <UseReducerComponent />
        </div>
      </div>
    </main>
  );
}
