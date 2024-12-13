import BannerFixo from "../_components/banner-fixo";
import Frame from "../_components/baseboard/fraame";
import { fetchProducts } from "../_resquests/products";
import Search from "./_components/search";


export default async function Shop() {
    const response = await fetchProducts()
    return (
        <>
            <BannerFixo
                firstTitle="Shop"
                secondTitle="Home"
                thirdTitle="Shop"
            />
            <Search products={response} />
            <Frame />
        </>
    );
};
