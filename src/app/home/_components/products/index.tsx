import Image from "next/image";
import Link from "next/link";

type Product = {
  id: number;
  sku: string;
  title: string;
  category: string;
  tags: string[];
  normalPrice: number;
  salePrice: number;
  discountPercentage: number;
  new: boolean;
  slug: string;
  description: {
    short: string;
    long: string;
  };
  colors: {
    name: string;
    hex: string;
  }[];
  sizes: string[];
  rating: number;
  images: {
    mainImage: string;
    gallery: string[];
  };
};

interface ProductsProps {
  products: Product[],
  limite: number
}

const Products = ({ products, limite }: ProductsProps) => {


  return (
    <div className="m-9 md:m-9">
      <h1 className="font-poppins font-bold text-2xl md:text-3xl text-center">Our Products</h1>
      <div className="flex flex-wrap items-center justify-center space-x-2 gap-6 md:gap-4 p-6">
        {products.map((product, index) => (
          (index < limite &&
            <div key={product.id} className="flex justify-center flex-col items-center text-center max-w-xs">
              <div className="relative">
                <Image
                  src={product.images.mainImage}
                  alt={product.title}
                  width={285}
                  height={301}
                  className="object-contain cursor-pointer"
                />
                <div className="absolute top-5 right-5 flex bg-[#E97171] rounded-full w-5 md:w-10 h-5 md:h-10 items-center justify-center text-white">
                  {product.discountPercentage * 100}%
                </div>
              </div>
              <div className="bg-[#F4F5F7] text-left w-[285px] h-auto p-4">
                <h1 className="font-poppins font-bold text-lg md:text-xl p-1">{product.title}</h1>
                <p className="font-poppins text-sm md:text-base text-[#898989] p-1">{product.description.short}</p>
                <div className="flex w-full h-full">
                  <h1 className="font-poppins font-bold text-base md:text-lg p-1">R${product.salePrice.toFixed(2)}</h1>
                  <p className="font-poppins text-sm md:text-base text-[#B0B0B0] line-through p-1">R${product.normalPrice.toFixed(2)}</p>
                </div>
              </div>
            </div>)
        ))}
        <Link href="">
        <button className="font-poppins font-bold ">Show More</button>
        </Link>
      </div>
    </div>
  );
};

export default Products;