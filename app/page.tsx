import CategoryList from "@/components/category-list";
import Header from "@/components/header";
import ProductList from "@/components/product-list";
import Search from "@/components/search";

export default function Home() {
  return (
    <>
      <Header />
      <div className="px-5 pt-6">
        <Search />
      </div>
      <CategoryList />
      <ProductList />
    </>
  );
}
