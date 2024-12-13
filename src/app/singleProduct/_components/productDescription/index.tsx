'use client';

import { Product } from "@/app/_components/productType";
import { useSearchParams } from "next/navigation";

interface ProductsProps {
  products: Product[];
}

const ProductDescription = ({ products }: ProductsProps) => {
  const searchParams = useSearchParams();
  const idParam = searchParams.get("id");

  if (idParam) {
    const product = products.find(product => product.id.toString() === idParam);

    if (product) {
      return (
        <div className="py-5 px-32 mt-8 border-t-2 border-[#D9D9D9]">
          <div className="flex items-center justify-center gap-32">
            <h1 className="font-poppins text-2xl font-semibold">Description</h1>
            <h1 className="font-poppins text-2xl text-[#9F9F9F]">Additional Information</h1>
          </div>
          <div className="py-5">
            <p className="font-poppins text-base text-[#9F9F9F]">{product.description.long}</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {product.images.gallery.map((image, index) => (
              <div key={index} className="w-1/2 p-2">
                <img
                  src={image}
                  alt={`Image ${index + 1}`}
                  className="w-full h-auto object-cover cursor-pointer"
                />
              </div>
            ))}
          </div>
        </div>
      )
    } else {
      return <h1>Produto não encontrado</h1>;
    }
  }

  return <h1>ID não fornecido</h1>;
};

export default ProductDescription;