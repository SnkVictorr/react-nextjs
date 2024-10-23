import {
  burguersCategory,
  pizzaCategory,
  japaneseFoodCategory,
  brazilianFoodCategory,
} from "@/data/data";
import CategoryItem from "./category-item";

const CategoryList = () => {
  const categories = [
    burguersCategory,
    pizzaCategory,
    japaneseFoodCategory,
    brazilianFoodCategory,
  ];

  return (
    <div className="grid grid-cols-2 gap-3">
      {categories.map((category) => (
        <CategoryItem key={category.id} categoria={category} />
      ))}
    </div>
  );
};

export default CategoryList;
