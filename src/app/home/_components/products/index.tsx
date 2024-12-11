"use client"
import { useEffect, useState } from "react";
import {Product} from "@/app/_components/productType"
import ProductCard from "@/app/_components/productCard";

interface ProductsProps {
  products: Product[],
  limite: number
}

const Products = ({ products, limite }: ProductsProps) => {
  const [randomizedProducts, setRandomizedProducts] = useState<Product[]>([]);

  useEffect(() => {
    const filteredProducts = products.filter(
      (product) =>
        product.title.length <= 40 &&
        product.description.short.length <= 500
    );
    const shuffled = filteredProducts.sort(() => Math.random() - 0.5);
    setRandomizedProducts(shuffled);
  }, [products]);



  return (
    <div className="m-9 md:m-9">
      <div className="flex flex-wrap items-center justify-center space-x-2 gap-6 md:gap-4 p-6">
        {randomizedProducts.slice(0, limite).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;

