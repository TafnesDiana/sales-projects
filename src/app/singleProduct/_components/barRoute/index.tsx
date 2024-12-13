'use client';

import { Product } from "@/app/_components/productType";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

interface ProductsProps {
  products: Product[];
}

const BarRouter = ({ products }: ProductsProps) => {
  const searchParams = useSearchParams();
  const idParam = searchParams.get("id");

  if (idParam) {
    const product = products.find(product => product.id.toString() === idParam);

    if (product) {
        return (
            <div className="mt-24">
                <div className="bg-[#F9F1E7] py-6 w-full px-28 flex items-center">
                    <Link href="/home">
                    <h1 className="text-[#9F9F9F] text-base font-poppins">home</h1>
                    </Link>
                    <img className="px-5" src="/images/siteBanner.svg" alt="seta" />
                    <Link href="/shop">
                    <h1 className="text-[#9F9F9F] text-base font-poppins">Shop</h1>
                    </Link>
                    <img className="px-5" src="/images/siteBanner.svg" alt="seta" />
                    <img className="px-2" src="images/Line.svg" alt="Separator" />
                    <h1 className="text-black text-base font-poppins pl-4">{product.title}</h1>
                </div>
            </div>
        )
    } else {
      return <h1>Produto não encontrado</h1>;
    }
  }

  return <h1>ID não fornecido</h1>;
};

export default BarRouter;