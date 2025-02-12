import { useHits } from "react-instantsearch";
import { ProductCard } from "../product-card";

export const ProductList = () => {
  const { items } = useHits();

  return (
    <div className="mt-6 md:mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
      {items.map((item) => (
        <ProductCard
          key={item.objectID}
          product={{
            title: item.name,
            image: item.image,
            price: item.salePrice,
          }}
        />
      ))}
    </div>
  );
};
