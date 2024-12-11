'use client'
import Image from "next/image";
import { useEffect, useState } from "react";
import {Product} from "@/app/_components/productType"

const ProductCard = ({ product }: { product: Product }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div key={product.id} className="relative flex justify-center flex-col items-center cursor-pointer text-center w-[285px] h-[446px] m-2  transition-all duration-300 group" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <div className="relative w-full h-[301px]">
                <Image
                    src={product.images.mainImage}
                    alt={product.title}
                    width={285}
                    height={301}
                    className="object-contain w-full h-full cursor-pointer"
                />
                <div className={`absolute top-5 right-5 flex rounded-full w-10 h-10 items-center justify-center text-white ${product.new ? "bg-[#2EC1AC]": product.discountPercentage? "bg-[#E97171]": ""}`}>
                    {product.new? "New": product.discountPercentage ? `${Math.round(product.discountPercentage * 100)}%`: ""}
                </div>

                <div className={`absolute inset-0 bg-[#3A3A3A] transition-opacity duration-300 ${isHovered ? 'opacity-80' : 'opacity-0'}`}style={{ zIndex: 1 }}>
                </div>
                
            </div>

            <div className={`text-left w-full h-[200px] p-4 transition-all duration-300 ${isHovered ? 'bg-[#525252]' : 'bg-[#F4F5F7]' }`}>
                <h1 className="font-poppins font-bold text-lg md:text-xl p-1 text-black truncate">
                    {product.title}
                </h1>
                <p className="font-poppins text-sm md:text-base text-[#898989] hover:text-[#222222] w-52 truncate p-1 ">
                    {product.description.short}
                </p>
                <div className="flex justify-between mt-2">
                    <h1 className="font-poppins font-bold text-base md:text-lg p-1 text-black ">
                        R${product.salePrice.toFixed(2)}
                    </h1>
                    <p className="font-poppins text-sm md:text-base text-[#B0B0B0] hover:text-[#222222] line-through p-1 ">
                        R${product.normalPrice.toFixed(2)}
                    </p>
                </div>
            </div>

            <div className={`absolute left-1/2 transform -translate-x-1/2 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}style={{ zIndex: 1 }}>
                <button className="bg-white text-[#B88E2F] font-poppins font-semibold mb-2 px-12 py-2 justify-center items-center">
                    Add to Cart
                </button>
                <div className="flex items-center justify-center gap-2">
                    <img src="images/share.svg" alt="iconShare" />
                    <p className="text-white font-poppins font-semibold">Share</p>
                    <img src="images/compare.svg" alt="iconCompare" />
                    <p className="text-white font-poppins font-semibold">Compare</p>
                    <img src="images/like.svg" alt="iconLike" />
                    <p className="text-white font-poppins font-semibold">Like</p>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;