'use client';

import { Product } from "@/app/_components/productType";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
// Importando a função que interage com o LocalStorage
import ButtonIncrement from "../../../_components/buttons/buttonIncrement";
import { addToCart } from "../../../../../utils/cartStorage";

interface ProductsProps {
  products: Product[];
}

interface CartItem {
  id: number;
  name: string;
  color: string;
  size: string;
  quantity: number;
  image: string;
  price: number;  // Adicionando a propriedade price aqui
}

const ProductPresentation = ({ products }: ProductsProps) => {
  const searchParams = useSearchParams();
  const idParam = searchParams.get("id");

  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState<number>(1);
  const [price, setPrice] = useState<number>(0);  // Inicializando a variável price com 0

  useEffect(() => {
    // Atualiza o preço apenas quando um produto é encontrado
    if (idParam) {
      const product = products.find((product) => product.id.toString() === idParam);
      if (product) {
        setPrice(product.salePrice);  // Atualiza o preço uma vez
      }
    }
  }, [idParam, products]);  // Re-executa o efeito apenas quando idParam ou products mudarem

  const handleAddToCart = (product: Product) => {
    if (!selectedColor || !selectedSize) {
      alert("Please select a color and size before adding to cart.");
      return;
    }

    const newItem: CartItem = {
      id: product.id,
      name: product.title,
      color: selectedColor,
      size: selectedSize,
      quantity: quantity,
      image: product.images.mainImage,
      price: price,  // Usando o valor de price da variável
    };

    addToCart(newItem); // Agora estamos utilizando a função que persiste no LocalStorage
    console.log(newItem);
    alert("Product added to cart!");
  };

  if (idParam) {
    const product = products.find((product) => product.id.toString() === idParam);

    if (product) {
      const renderStars = (rating: number) => {
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 >= 0.5;
        const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

        return (
          <div className="flex gap-1.5">
            {Array.from({ length: fullStars }, (_, i) => (
              <span key={`full-${i}`} className="text-yellow-400 text-3xl">★</span>
            ))}
            {halfStar && <span className="text-yellow-400 text-3xl">☆</span>}
            {Array.from({ length: emptyStars }, (_, i) => (
              <span key={`empty-${i}`} className="text-gray-500 text-2xl">★</span>
            ))}
          </div>
        );
      };

      const [mainImage, setMainImage] = useState(product.images.mainImage);

      return (
        <div className="grid grid-cols-2 w-full pt-10">
          <div className="flex justify-center items-center">
            <div className="flex">
              <div className="flex flex-col space-x-2 mt-4 mr-4">
                {product.images.gallery.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Image ${index + 1}`}
                    className="w-40 h-40 object-cover cursor-pointer"
                    onClick={() => setMainImage(image)}
                  />
                ))}
              </div>
              <div className="w-96">
                <img src={mainImage} alt={product.title} className="w-auto h-96 object-cover" />
              </div>
            </div>
          </div>

          <div className="flex flex-col text-justify pr-14">
            <h1 className="font-poppins text-4xl">{product.title}</h1>
            <h2 className="font-poppins text-2xl text-[#9F9F9F] mt-2">Rs. {price.toFixed(2)}</h2> {/* Usando o price armazenado */}
            <div className="flex items-center gap-2 my-4">
              <div>
                {renderStars(product.rating)}
              </div>
              <img src="images/Line.svg" alt="" />
              <div>
                <p className="text-sm text-[#9F9F9F]">{product.rating} Customer Review</p>
              </div>
            </div>
            <p className="font-poppins text-base text-left">{product.description.short}</p>

            <div className="my-4">
              <h1 className="text-base text-[#9F9F9F] font-poppins">Size</h1>
              <div className="flex space-x-2 mt-2 font-poppins">
                {product.sizes.map((size, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 rounded ${
                      selectedSize === size ? "bg-[#B88E2F] text-white" : "bg-[#F9F1E7] text-black"
                    } hover:bg-[#B88E2F] hover:text-white`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="my-4">
              <h1 className="text-base text-[#9F9F9F] font-poppins">Color</h1>
              <div className="flex space-x-2 mt-2">
                {product.colors.map((color, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedColor(color.name)}
                    className={`px-4 py-4 rounded-full border ${
                      selectedColor === color.name ? "border-black" : "border-transparent"
                    }`}
                    style={{ backgroundColor: color.hex }}
                  ></button>
                ))}
              </div>
            </div>
            <div className="flex items-center space-x-4 mt-6">
              <ButtonIncrement quantity={quantity} setQuantity={setQuantity} />
              <div>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="border border-black text-black font-poppins px-8 py-4 rounded-xl hover:bg-[#B88E2F] hover:text-white hover:border-transparent"
                >
                  Add To Cart
                </button>
              </div>
            </div>
            <div className="px-32 mt-8 border-t-2 border-[#D9D9D9]"></div>
          </div>
        </div>
      );
    } else {
      return <h1>Produto não encontrado</h1>;
    }
  }

  return <h1>ID não fornecido</h1>;
};

export default ProductPresentation;