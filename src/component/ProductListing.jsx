import ProductCard from "./ProductCard";

const ProductListing = ({ products = [] }) => {
  console.log(products);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 p-5">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductListing;
