import Image from "next/image";
import Link from "next/link";

const Banner = () => {
    return (
        <div className="relative w-screen h-screen">

            <Image
                src="/images/Background1.svg"
                alt="Background01"
                layout="fill"
                objectFit="cover"
                objectPosition="top"
                priority
            />


            <div className="absolute right-5 sm:right-10 md:right-20 top-32 sm:top-40 md:top-42 w-[90%] sm:w-[80%] md:w-[643px] h-auto bg-[#FFF3E3] flex items-center justify-center rounded-xl px-5 sm:px-9 pt-16 pb-16">
                <div className="w-full text-center md:text-left">
                    <p className="font-poppins tracking-[.25em] font-medium text-sm sm:text-base md:text-lg">
                        New Arrival
                    </p>
                    <h1 className="font-poppins mt-4 sm:mt-6 text-[#B88E2F] text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                        Discover Our New Collection
                    </h1>
                    <h2 className="font-poppins text-sm sm:text-base md:text-lg mt-4 sm:mt-6 font-semibold">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                        tellus, luctus nec ullamcorper mattis
                    </h2>
                    <Link href="/shop">
                        <button className="bg-[#B88E2F] mt-6 font-poppins font-bold text-white py-3 sm:py-4 px-12 sm:px-16 md:px-24 text-sm sm:text-base">
                            BUY NOW
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Banner;
