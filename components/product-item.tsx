// import { CategoryItemProps } from "./category-item";

import { formatCurrentBR } from "@/app/helpers/price";
import Image from "next/image";
import Link from "next/link";

interface ProductInterface {
  productItem: {
    id: string;
    name: string;
    price: number;
    description: string;
    discountPercentage: number;
    imageUrl: string;
    restaurant: {
      name: string;
    };
    // category: CategoryItemProps;
    category: {
      name: string;
    };
  };
}

const ProductItem = ({ productItem }: ProductInterface) => {
  return (
    <>
      <Link href={"/productpage/${productItem.id}"}>
        <div className="flex flex-col items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-md">
          <Image
            src={productItem.imageUrl}
            alt={productItem.name}
            height={30}
            width={30}
          />

          <span className="text-sm font-semibold">{productItem.name}</span>
          <span className="text-sm font-semibold">
            {formatCurrentBR(
              productItem.price -
                (productItem.price * (productItem.discountPercentage || 0)) /
                  100
            )}
          </span>
          <span className="text-sm font-semibold">
            {formatCurrentBR(productItem.price)}
          </span>
          <span className="text-sm font-semibold">
            {productItem.restaurant.name}
          </span>
          <span className="text-sm font-semibold">
            {productItem.category.name}
          </span>
          <span className="text-sm font-semibold">
            {productItem.description}
          </span>
          <span className="text-sm font-semibold">
            Desconto: {productItem.discountPercentage}%
          </span>
        </div>
      </Link>
    </>
  );
};

export default ProductItem;
