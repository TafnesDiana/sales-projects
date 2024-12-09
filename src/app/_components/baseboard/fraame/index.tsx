import Image from "next/image";

const Frame = () => {
    return (
        <div className="bg-[#FAF3EA] h-auto w-screen flex space-x-4 gap-6 md:gap-4 p-6 py-16 justify-center ">
            <div className="flex">
                <Image
                    src="/images/trophy-fraame.svg"
                    alt="trophy-fraame"
                    width={60}
                    height={60}
                    className="m-2"
                />
                <div className="flex flex-col justify-center">
                    <h1 className="font-poppins font-bold text-base">High Quality</h1>
                    <p  className="font-poppins text-[#898989] text-sm">crafted from top materials</p>
                </div>
            </div>
            <div className="flex">
                <Image
                    src="/images/guarantee-fraame.svg"
                    alt="trophy-fraame"
                    width={60}
                    height={60}
                    className="m-2"
                />
                <div className="flex flex-col justify-center">
                    <h1 className="font-poppins font-bold text-base">Warranty Protection</h1>
                    <p  className="font-poppins text-[#898989] text-sm">Over 2 years</p>
                </div>
            </div>
            <div className="flex">
                <Image
                    src="/images/shipping-fraame.svg"
                    alt="shopping-fraame"
                    width={60}
                    height={60}
                    className="m-2"
                />
                <div className="flex flex-col justify-center">
                    <h1 className="font-poppins font-bold text-base">Free Shipping</h1>
                    <p  className="font-poppins text-[#898989] text-sm">Order over 150 $</p>
                </div>
            </div>
            <div className="flex">
                <Image
                    src="/images/customer-support-fraame.svg"
                    alt="customer-support-fraame"
                    width={60}
                    height={60}
                    className="m-2"
                />
                <div className="flex flex-col justify-center">
                    <h1 className="font-poppins font-bold text-base">24 / 7 Support</h1>
                    <p  className="font-poppins text-[#898989] text-sm">Dedicated support</p>
                </div>
            </div>
        </div>
    );
};

export default Frame;