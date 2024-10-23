import { CategoryItemProps } from "./category-item";

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
        imageUrl: string;
        deliveryFee: number;
        deliveryTimeMinutes: number;
        categories: {
            id: string;
            name: string;
            imageUrl: string;
        }[];
    };
    category: CategoryItemProps;
  };
}

const ProductItem  = ({productItem}: ProductInterface) => {
  return (  );
}
 
export default ProductItem ;