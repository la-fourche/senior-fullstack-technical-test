import { useHits } from "react-instantsearch";
import { ProductCard } from "../product-card";

export const ProductList = () => {
  const { items } = useHits();

  return (
    <div className="grid grid-cols-4 gap-4">
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
