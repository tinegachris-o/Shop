//import './productList.css';

import ProductsCard from "./productsCard";
import { useContext } from "react";
import { ProductContext } from "../contex/ProductContext";
const ProductList = () => {
  const { products, loading, error } = useContext(ProductContext);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {products.map((product) => (
        <ProductsCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
