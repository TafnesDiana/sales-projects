import Image from "next/image";

const Products = () => {
    return (
        <div className="m-9 md:m-9">
            <h1 className="font-poppins font-bold text-2xl md:text-3xl text-center">Our Products</h1>
            <div className="flex flex-col md:flex-row items-center justify-center space-x-4 gap-6 md:gap-4 p-6">
                <div className="flex justify-center flex-col items-center text-center max-w-xs">
                    <div className=" relative">
                        <Image
                            src="/images/image01.svg"
                            alt="Dining"
                            width={285}
                            height={301}
                            className="object-contain cursor-pointer"
                        />
                        <div className="absolute top-5 right-5 flex bg-[#E97171] rounded-full w-5 md:w-10 h-5 md:h-10 items-center justify-center text-white">
                            -30%
                        </div>
                    </div>
                    <div className="bg-[#F4F5F7] text-left  w-[285px] h-[148px] p-4">
                        <h1 className="font-poppins font-bold text-lg md:text-xl p-1">Syltherine</h1>
                        <p className="font-poppins  text-sm md:text-base text-[#898989] p-1">Stylish cafe chair</p>
                        <div className="flex w-full h-full">
                            <h1 className="font-poppins font-bold  text-base md:text-lg p-1">Rp 2.500.000</h1>
                            <p className="font-poppins text-sm md:text-base text-[#B0B0B0] line-through p-1">Rp 3.500.000</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center flex-col items-center text-center max-w-xs">
                    <Image
                        src="/images/image01.svg"
                        alt="Dining"
                        width={285}
                        height={301}
                        className="object-contain cursor-pointer"
                    />
                    <div className="bg-[#F4F5F7] text-left  w-[285px] h-[148px] p-4">
                        <h1 className="font-poppins font-bold text-lg md:text-xl p-1">Leviosa</h1>
                        <p className="font-poppins  text-sm md:text-base text-[#898989] p-1">Stylish cafe chair</p>
                        <div className="flex w-full h-full">
                            <h1 className="font-poppins font-bold  text-base md:text-lg p-1">Rp 2.500.000</h1>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center flex-col items-center text-center max-w-xs">
                    <Image
                        src="/images/image01.svg"
                        alt="Dining"
                        width={285}
                        height={301}
                        className="object-contain cursor-pointer"
                    />
                    <div className="bg-[#F4F5F7] text-left  w-[285px] h-[148px] p-4">
                        <h1 className="font-poppins font-bold text-lg md:text-xl p-1">Lolito</h1>
                        <p className="font-poppins  text-sm md:text-base text-[#898989] p-1">Luxury big sofa</p>
                        <div className="flex w-full h-full">
                            <h1 className="font-poppins font-bold text-base md:text-lg p-1">Rp 7.000.000</h1>
                            <p className="font-poppins text-sm md:text-base text-[#B0B0B0] line-through p-1">Rp 14.000.000</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center flex-col items-center text-center max-w-xs">
                    <Image
                        src="/images/image01.svg"
                        alt="Dining"
                        width={285}
                        height={301}
                        className="object-contain cursor-pointer"
                    />
                    <div className="bg-[#F4F5F7] text-left  w-[285px] h-[148px] p-4">
                        <h1 className="font-poppins font-bold text-lg md:text-xl p-1">Respira</h1>
                        <p className="font-poppins  text-sm md:text-base text-[#898989] p-1">Outdoor bar table and stool</p>
                        <div className="flex w-full h-full">
                            <h1 className="font-poppins font-bold text-base md:text-lg p-1">Rp 500.000</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Products;