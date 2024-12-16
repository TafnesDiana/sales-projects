'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import BannerFixo from "../_components/banner-fixo";
import Frame from "../_components/baseboard/fraame";
import ButtonIncrement from "../_components/buttons/buttonIncrement";
import Button from "../_components/buttons/button";
import { getCart, addToCart, removeFromCart, clearCart, updateItemQuantity } from "../../../utils/cartStorage"; // Importando as funções corretas

const Cart = () => {
  const [cartItems, setCartItems] = useState<any[]>([]); // Estado para armazenar os itens do carrinho

  useEffect(() => {
    const items = getCart(); // Recupera os itens do carrinho
    if (items.length === 0) {
      clearCart(); // Limpa o carrinho se estiver vazio no início
    }
    setCartItems(items); // Define os itens no estado
  }, []);

  const handleIncrementQuantity = (id: number, operation: string) => {
    const updatedCart = cartItems.map((item) => {
      if (item.id === id) {
        const newQuantity = operation === "increment" ? item.quantity + 1 : item.quantity - 1;
        return {
          ...item,
          quantity: newQuantity > 0 ? newQuantity : 1, // Impede que a quantidade seja negativa
        };
      }
      return item;
    });

    setCartItems(updatedCart); // Atualiza o estado local

    // Atualiza o localStorage corretamente
    updatedCart.forEach(item => updateItemQuantity(item.id, item.size, item.color, item.quantity)); // Atualiza o localStorage
  };

  const handleRemoveItem = (id: number, size: string, color: string) => {
    // Atualiza o estado local imediatamente após a remoção do item
    const updatedCart = cartItems.filter(
      (item) => !(item.id === id && item.size === size && item.color === color)
    );
    setCartItems(updatedCart);

    // Atualiza o localStorage para refletir a remoção
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Atualiza o localStorage
  };

  const isValidPrice = (price: string) => {
    const parsedPrice = parseFloat(price);
    return !isNaN(parsedPrice) && parsedPrice > 0;
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      const price = isValidPrice(item.price) ? parseFloat(item.price) : 0;
      const quantity = item.quantity || 0;
      return total + (price * quantity);
    }, 0);
  };

  return (
    <>
      {/* Banner Section */}
      <BannerFixo firstTitle="Cart" secondTitle="Home" thirdTitle="Shop" />

      {/* Main Content */}
      <div className="flex my-16 mx-24">
        {/* Product List Section */}
        <div className="flex flex-col flex-grow">
          {/* Header Row */}
          <div className="bg-[#F9F1E7] py-5 px-10 flex mr-10">
            <h1 className="font-poppins font-semibold text-base flex-1 text-center">Product</h1>
            <h1 className="font-poppins font-semibold text-base flex-1 text-center">Price</h1>
            <h1 className="font-poppins font-semibold text-base flex-1 text-center">Quantity</h1>
            <h1 className="font-poppins font-semibold text-base flex-1 text-center">Subtotal</h1>
          </div>

          {/* Product Rows */}
          {cartItems.map((item) => (
            <div key={item.id} className="py-5 px-10 flex items-center bg-white border-b border-gray-200">
              <div className="flex items-center flex-1">
                <img src={item.image} alt="Product" className="w-16 h-16 object-cover" />
                <h1 className="font-poppins text-[#9F9F9F] text-base ml-5">{item.name}</h1>
              </div>
              <h1 className="font-poppins text-[#9F9F9F] text-base flex-1 text-center">
                {isValidPrice(item.price) ? `$${item.price}` : 'Invalid Price'}
              </h1>
              <div className="flex-1 text-center">
                <ButtonIncrement quantity={item.quantity} setQuantity={(newQuantity) => handleIncrementQuantity(item.id, newQuantity > item.quantity ? "increment" : "decrement")} />
              </div>
              <h1 className="font-poppins text-base flex-1 text-center">
                {isValidPrice(item.price) ? `$${(Number(item.price) * item.quantity).toFixed(2)}` : 'Invalid Price'}
              </h1>
              <div className="w-14 h-14 flex justify-center items-center">
                <img
                  src="/images/lixo.svg"
                  alt="Delete"
                  className="cursor-pointer"
                  onClick={() => handleRemoveItem(item.id, item.size, item.color)} // Passando size e color
                />
              </div>
            </div>
          ))}
        </div>

        {/* Cart Totals Section */}
        <div className="bg-[#F9F1E7] w-1/3 py-5 px-8 flex flex-col justify-center items-center">
          <h1 className="font-poppins font-bold text-3xl">Cart Totals</h1>
          <div className="mt-14 w-full">
            {/* Subtotal */}
            <div className="flex justify-between items-center mb-4">
              <h1 className="font-poppins font-semibold text-base">Subtotal</h1>
              <p className="font-poppins text-[#9F9F9F] text-base">
                ${calculateTotal() ? calculateTotal().toFixed(2) : "0.00"}
              </p>
            </div>
            {/* Total */}
            <div className="flex justify-between items-center mb-10">
              <h1 className="font-poppins font-semibold text-base">Total</h1>
              <p className="font-poppins text-[#B88E2F] text-base">
                ${calculateTotal() ? calculateTotal().toFixed(2) : "0.00"}
              </p>
            </div>
            {/* Checkout Button */}
            <Link href="/checkout">
              <Button className="rounded-2xl py-3 px-10 w-full text-center">
                Check Out
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Frame />
    </>
  );
};

export default Cart;


