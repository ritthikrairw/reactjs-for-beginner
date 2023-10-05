import ProductItem from "@/components/product-item/product-item";

export default function Component() {
  return (
    <main className='container mx-auto my-10'>
      <h1 className='text-2xl font-medium mb-6'>Example Components</h1>
      <div className='grid grid-cols-4 gap-4'>
        {Array.from({ length: 8 }).map((_, i) => (
          <ProductItem key={i} />
        ))}
      </div>
    </main>
  );
}
