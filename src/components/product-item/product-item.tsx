import Image from "next/image";
import { ThemeContext } from "../use-context-component/use-context-component";
import { useContext } from "react";
import classNames from "classnames";

export function ProductItem() {
  const theme = useContext(ThemeContext);

  return (
    <div
      className={classNames(
        "shadow-md rounded-md overflow-hidden relative cursor-pointer hover:shadow-xl transition-all",
        {
          "text-white bg-slate-800": theme === "dark",
          "text-base bg-white": theme === "light",
        }
      )}
    >
      <ProductImage />
      <ProductContent />
    </div>
  );
}

export default ProductItem;

function ProductImage() {
  return (
    <figure>
      <Image
        src='https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
        height={600}
        width={600}
        alt='Product Component'
      />
    </figure>
  );
}

function ProductContent() {
  return (
    <div className='relative p-4'>
      <h3>Product Name</h3>
      <small className='text-gray-500'>White/Black</small>
      <ProductPrice />
    </div>
  );
}

function ProductPrice() {
  return <div className='absolute top-4 right-4'>$199</div>;
}
