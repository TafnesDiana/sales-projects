
import Link from "next/link";
import Banner from "../_components/homeComponents/banner";
import Mosaic from "../_components/homeComponents/mosaic";
import Products from "../_components/homeComponents/products";
import Range from "../_components/homeComponents/range";

const Home = () => {

  return (
    <div>
      <Banner />
      <Range />
      <Products />
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

export default Home;
