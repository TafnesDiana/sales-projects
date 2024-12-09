import { fetchProducts } from "../_resquests/products";
import Products from "../home/_components/products";


export default async function About(){
        const response = await fetchProducts()
    return (
        <div>
           <Products  products={response} limite={2} />
            <p>oioooooooooooooooooooooooooooooooooooooooooooooooooooooooooo</p>
        </div>
    );

};