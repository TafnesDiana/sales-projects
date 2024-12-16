import { fetchProducts } from "@/app/_resquests/products";
import ProductDescription from "./_components/productDescription";
import ProductPresentation from "./_components/productPresentation";
import BarRouter from "./_components/barRoute";
import RelatedProducts from "./_components/relatedProducts";

export default async function SingleProduct() {
  const response = await fetchProducts();


  return (
    <div>
      <BarRouter products={response}/>
      <ProductPresentation products={response} />
      <ProductDescription products={response}/>
      <RelatedProducts products={response}/>
    </div>
  );
}

