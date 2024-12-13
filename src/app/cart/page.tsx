import Link from "next/link";
import BannerFixo from "../_components/banner-fixo";
import Frame from "../_components/baseboard/fraame";
import ButtonIncrement from "../_components/buttons/buttonIncrement";
import Button from "../_components/buttons/button";

const Card = () => {
    return (
        <>
            <BannerFixo
                firstTitle="Cart"
                secondTitle="Home"
                thirdTitle="Shop"
            />
            <div className="flex my-16 mx-24">
                <div className="flex flex-col">
                    <div className="bg-[#F9F1E7] w-auto h-auto py-5 px-10 flex mr-10">
                        <h1 className="font-poppins font-semibold text-base ml-20">Product</h1>
                        <h1 className="font-poppins font-semibold text-base mx-28">Price</h1>
                        <h1 className="font-poppins font-semibold text-base mr-16">Quantity</h1>
                        <h1 className="font-poppins font-semibold text-base mr-20">Subtotal</h1>
                    </div>
                    <div className="w-auto h-auto py-5 pr-10 flex mr-10">
                        <h1>imagem</h1>
                        <h1 className="font-poppins text-[#9F9F9F] text-base ml-5">nome do produto</h1>
                        <h1 className="font-poppins text-[#9F9F9F] text-base">valor do produto</h1>
                        <ButtonIncrement />
                        <h1 className="font-poppins text-base">subtotal</h1>
                        <div className="w-14 h-14">
                            <img src="/images/lixo.svg" alt="" />
                        </div>
                    </div>
                </div>
                <div className="bg-[#F9F1E7] w-auto h-auto py-5 px-24 flex flex-col justify-center items-center">
                    <h1 className="font-poppins font-bold text-3xl" >Cart Totals</h1>
                    <div>
                        <div className="flex gap-16 mt-14">
                            <h1 className="font-poppins font-semibold text-base" >Subtotal</h1>
                            <p className="font-poppins text-[#9F9F9F] text-base">valor unitario</p>
                        </div>
                        <div className="flex gap-16 mt-10">
                            <h1 className="font-poppins font-semibold text-base" >Total</h1>
                            <p className="font-poppins text-[#B88E2F] text-base">soma valores</p>
                        </div>
                        <div className="flex justify-center items-center">
                            <Link href="/checkout">
                                <Button className="rounded-2xl py-3 px-10 mt-10">
                                    Check Out
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Frame />
        </>
    );
};

export default Card;