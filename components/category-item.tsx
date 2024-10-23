import Image from "next/image";

export interface CategoryItemProps {
  categoria: {
    id: string;
    name: string;
    imageUrl: string;
  };
}

const CategoryItem = ({ categoria }: CategoryItemProps) => {
  return (
    <div className="flex items-center gap-3 rounded-full bg-white px-4 py-3 shadow-md">
      <Image
        src={categoria.imageUrl}
        alt={categoria.name}
        height={30}
        width={30}
      />
      <span className="text-sm font-semibold">{categoria.name}</span>
    </div>
  );
};

export default CategoryItem;
