import Image from "next/image";
import BannerFixo from "../_components/banner-fixo";
import Frame from "../_components/baseboard/fraame";


const Shop = () => {
    return (
        <div>
            <div className="bg-[#FAF3EA] h-auto w-screen flex">
                <div></div>
                <div></div>
            </div>

            

            <BannerFixo
                firstTitle="Shop"
                secondTitle="Home"
                thirdTitle="Shop"
            />
            <Frame />
        </div>
    );
};

export default Shop;