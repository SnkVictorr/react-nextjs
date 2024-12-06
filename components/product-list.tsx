import { burguerProducts } from "@/data/data";

import ProductItem from "./product-item";

const ProductList = () => {
  return (
    <div className="grid grid-cols-5 gap-3 mt-20">
      {burguerProducts.map((product) => (
        <ProductItem key={product.id} productItem={product} />
      ))}
    </div>
  );
};

export default ProductList;
