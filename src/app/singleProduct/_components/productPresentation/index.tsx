'use client';

import { Product } from "@/app/_components/productType";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import ButtonIncrement from "../../../_components/buttons/buttonIncrement";

interface ProductsProps {
  products: Product[];
}

const ProductPresentation = ({ products }: ProductsProps) => {
  const searchParams = useSearchParams();
  const idParam = searchParams.get("id");

  if (idParam) {
    const product = products.find((product) => product.id.toString() === idParam);

    if (product) {
      const renderStars = (rating: number) => {
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 >= 0.5;
        const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

        return (
          <div className="flex gap-1.5">
            {Array.from({ length: fullStars }, (_, i) => (
              <span key={`full-${i}`} className="text-yellow-400 text-3xl">★</span>
            ))}
            {halfStar && <span className="text-yellow-400 text-3xl">☆</span>}
            {Array.from({ length: emptyStars }, (_, i) => (
              <span key={`empty-${i}`} className="text-gray-500 text-2xl">★</span>
            ))}
          </div>
        );
      };

      const [mainImage, setMainImage] = useState(product.images.mainImage);

      return (
        <div className="grid grid-cols-2 w-full pt-10">
          <div className="flex justify-center items-center">
            <div className="flex">
              <div className="flex flex-col space-x-2 mt-4 mr-4">
                {product.images.gallery.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Image ${index + 1}`}
                    className="w-40 h-40 object-cover cursor-pointer"
                    onClick={() => setMainImage(image)}
                  />
                ))}
              </div>
              <div className="w-96">
                <img src={mainImage} alt={product.title} className="w-auto h-96 object-cover" />
              </div>
            </div>
          </div>

          <div className="flex flex-col text-justify pr-14">
            <h1 className="font-poppins text-4xl">{product.title}</h1>
            <h2 className="font-poppins text-2xl text-[#9F9F9F] mt-2">Rs. {product.salePrice.toFixed(2)}</h2>
            <div className="flex items-center gap-2 my-4">
              <div>
                {renderStars(product.rating)}
              </div>
              <img src="images/Line.svg" alt="" />
              <div>
                <p className="text-sm text-[#9F9F9F]">{product.rating} Customer Review</p>
              </div>
            </div>
            <p className="font-poppins text-base text-left">{product.description.short}</p>

            <div className="my-4">
              <h1 className="text-base text-[#9F9F9F] font-poppins">Size</h1>
              <div className="flex space-x-2 mt-2 font-poppins">
                {product.sizes.map((size, index) => (
                  <button
                    key={index}
                    className="bg-[#F9F1E7] text-black px-4 py-2 rounded hover:bg-[#B88E2F] hover:text-white"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="my-4">
              <h1 className="text-base text-[#9F9F9F] font-poppins">Color</h1>
              <div className="flex space-x-2 mt-2">
                {product.colors.map((color, index) => (
                  <button
                    key={index}
                    className="px-4 py-4 rounded-full border border-transparent hover:border-black"
                    style={{ backgroundColor: color.hex }}
                  >
                  </button>
                ))}
              </div>
            </div>
            <div className="flex items-center space-x-4 mt-6">
                  <ButtonIncrement/>
              <div>
                <Link href="/cart">
                  <button className="border border-black text-black font-poppins px-8 py-4 rounded-xl hover:bg-[#B88E2F] hover:text-white hover:border-transparent">
                    Add To Cart
                  </button>
                </Link>
              </div>
            </div>
            <div className="px-32 mt-8 border-t-2 border-[#D9D9D9]"></div>
            <div className="flex pt-4">
              <div className="flex flex-col mr-6">
                <h1 className="text-base font-poppins text-[#9F9F9F] py-2">SKU</h1>
                <h1 className="text-base font-poppins text-[#9F9F9F] py-2">Category</h1>
                <h1 className="text-base font-poppins text-[#9F9F9F] py-2">Tags</h1>
                <h1 className="text-base font-poppins text-[#9F9F9F] py-2">Share</h1>
              </div>
              <div className="flex flex-col">
                <h1 className="text-base font-poppins text-[#9F9F9F] py-2">:   {product.sku}</h1>
                <h1 className="text-base font-poppins text-[#9F9F9F] py-2">:   {product.category}</h1>
                <h1 className="text-base font-poppins text-[#9F9F9F] py-2">:   {product.tags}</h1>
                <h1 className="flex text-[#9F9F9F] text-base font-poppins py-2"> :
                  <img className="px-2" src="images/facebook-page-apresentation.svg" alt="icon" />
                  <img className="px-2" src="images/linkedlin-page-apresentation.svg" alt="icon" />
                  <img className="px-2" src="images/twitter-page-apresentation.svg" alt="icon" />
                </h1>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return <h1>Produto não encontrado</h1>;
    }
  }

  return <h1>ID não fornecido</h1>;
};

export default ProductPresentation;