import Link from "next/link";

const Footer = () => {
    return (
        <div className="px-32 pt-16 border-t-4 border-[#D9D9D9]">
            <div className="flex flex-col md:flex-row items-start space-x-4 gap-6 md:gap-4">
                <div className="pr-6 md:pr-8">
                    <h1 className="font-poppins font-bold text-lg md:text-xl  sm:pb-8 md:pb-10 lg:pb-12">Furniro.</h1>
                    <p className="break-words  font-poppins text-sm md:text-base text-[#9F9F9F] text-left">400 University Drive Suite 200 Coral</p>
                    <p className="break-words  font-poppins text-sm md:text-base text-[#9F9F9F] text-left">Gables,</p>
                    <p className="break-words  font-poppins text-sm md:text-base text-[#9F9F9F] text-left">FL 33134 USA</p>
                    <div className="flex  pt-11 sm:pt-12 md:pt-11 lg:pt-11">
                        <div><img src="/images/facebook.svg" alt="facebook" /></div>
                        <div><img src="/images/instagram.svg" alt="instagram" /></div>
                        <div><img src="/images/twitter.svg" alt="twitter" /></div>
                        <div><img src="/images/linkedln.svg" alt="linkedln" /></div>
                    </div>
                </div>
                <div className="pr-6 md:pr-8">
                    <h1 className="font-poppins font-semibold text-[#9F9F9F]  sm:pt-16 md:pt-0 lg:pt-0">Links</h1>
                    <Link href="/home"><p className="font-poppins font-semibold pt-12" >Home</p></Link>
                    <Link href="/shop"><p className="font-poppins font-semibold pt-12">Shop</p></Link>
                    <Link href="/about"><p className="font-poppins font-semibold pt-12">About</p></Link>
                    <Link href="/contact"><p className="font-poppins font-semibold pt-12">Contact</p></Link>
                </div>
                <div className="pr-6 md:pr-8">
                    <h1 className="font-poppins font-semibold text-[#9F9F9F]  sm:pt-16 md:pt-0 lg:pt-0">Help</h1>
                    <p className="font-poppins font-semibold pt-12">Payment Options</p>
                    <p className="font-poppins font-semibold pt-12">Returns</p>
                    <p className="font-poppins font-semibold pt-12">Privacy Policies</p>
                </div>
                <div className="pr-6 md:pr-8">
                    <h1 className="font-poppins font-semibold text-[#9F9F9F]  sm:pt-16 md:pt-0 lg:pt-0">Newsletter</h1>
                    <div className="pt-12">
                        <input type="email" placeholder='Enter Your Email Address' className="font-poppins underline underline-offset-4 pr-4" id="EmailInput" />
                        <Link href=""><button className="font-poppins font-semibold underline underline-offset-4">SUBSCRIBE</button></Link>
                    </div>
                </div>
            </div>
            <div className="pt-8 sm:pt-10 md:pt-12 lg:pt-16 border-t-2 border-[#D9D9D9] my-1 sm:my-2 md:my-3 lg:my-4 mt-10 sm:mt-11 md:mt-12 lg:mt-14">
                <p className="font-poppins text-sm md:text-base text-left">2023 furino. All rights reverved</p>
            </div>
        </div>
    );
};

export default Footer;