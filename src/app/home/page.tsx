import Link from "next/link";
import Banner from "../home/_components/banner";
import Mosaic from "../home/_components/mosaic";
import Products from "../home/_components/products";
import Range from "../home/_components/range";
import { fetchProducts } from "../_resquests/products";

export default async function Home() {
  const response = await fetchProducts()
  return (
    <div>
      <Banner />
      <Range />
      <Products products={response} limite={8} />
      <div className="w-full h-[550px] mx-auto p-4 flex justify-center items-center bg-[#FCF8F3]">
        <div className="w-1/3 flex flex-col justify-center items-start text-left ml-24 mr-12 right-0">
          <h1 className="sm:text-2xl md:text-3xl lg:text-4xl font-bold font-poppins mb-8">
            50+ Beautiful rooms inspiration
          </h1>
          <p className="font-poppins sm:text-xs md:text-sm lg:text-base text-[#616161] mb-6">
            Our designer already made a lot of beautiful prototipe of rooms that inspire you
          </p>
          <Link href="">
            <button className="font-poppins font-bold text-white sm:text-xs md:text-sm lg:text-base bg-[#B88E2F] py-3 px-6">
              Explore More
            </button>
          </Link>
        </div>
      </div>

      <Mosaic />
    </div>
  );
};

