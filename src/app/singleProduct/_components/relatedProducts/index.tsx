'use client';

import ProductCard from "@/app/_components/productCard";
import { Product } from "@/app/_components/productType";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

interface ProductsProps {
  products: Product[];
}

const RelatedProducts = ({ products }: ProductsProps) => {
  const searchParams = useSearchParams();
  const idParam = searchParams.get("id");

  if (idParam) {
    const product = products.find(product => product.id.toString() === idParam);

    if (product) {
      const relatedProducts = products.filter(
        (relatedProduct) => relatedProduct.category === product.category && relatedProduct.id !== product.id
      );

      const limitedRelatedProducts = relatedProducts.slice(0, 3);

      return (
        <div className="py-5 px-32 mt-8 border-t-2 border-[#D9D9D9]">
          <h1 className="font-bold font-poppins flex items-center text-4xl justify-center mb-8">
            Related Products
          </h1>
          
          <div className="flex flex-wrap justify-center gap-4">
            {limitedRelatedProducts.map((relatedProduct) => (
              <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4" key={relatedProduct.id}>
                <ProductCard product={relatedProduct} />
              </div>
            ))}
          </div>

          <div className="flex justify-center items-center">
            <Link href={`/shop?category=${product.category}`}>
              <button className="font-poppins font-bold border border-[#B88E2F] hover:bg-[#B88E2F] text-[#B88E2F] hover:text-white sm:text-xs md:text-sm lg:text-base px-16 py-3 my-7">
                Show More
              </button>
            </Link>
          </div>
        </div>
      )
    } else {
      return <h1>Produto não encontrado</h1>;
    }
  }

  return <h1>ID não fornecido</h1>;
};

export default RelatedProducts;
