import Image from "next/image";
import { ThemeContext } from "../use-context-component/use-context-component";
import { useContext } from "react";
import classNames from "classnames";

export function ProductItem(props: ProductItemProps) {
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
      <ProductContent {...props} />
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

export interface ProductItemProps {
  name: string;
  variations: string;
  price: number;
}

function ProductContent(props: ProductItemProps) {
  return (
    <div className='relative p-4'>
      <ProductName name={props.name} />
      <ProductVariations variations={props.variations} />
      <ProductPrice price={props.price} />
    </div>
  );
}

function ProductName({ name }: { name: string }) {
  return <h3>{name}</h3>;
}

function ProductVariations({ variations }: { variations: string }) {
  return <small className='text-gray-500'>{variations}</small>;
}

function ProductPrice({ price }: { price: number }) {
  return <div className='absolute top-4 right-4'>${price}</div>;
}
