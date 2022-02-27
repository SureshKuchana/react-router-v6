import React, { useState } from "react";
import data from "../../../db.json";
import { ProductCard } from "./ProductCard";

export const ProductIndex = () => {
  const [products] = useState(data.products);
  if (products === null) return <div>loading...</div>;
  return (
    <div style={{ padding: 5 }}>
      {products &&
        products.map((item) => (
          <ProductCard key={item.id} product={item}>
            {item?.name}
          </ProductCard>
        ))}
    </div>
  );
};
