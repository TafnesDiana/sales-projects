'use client'
import { useState } from "react";

const ButtonIncrement = () =>{
     const [quantity, setQuantity] = useState(1);
     const incrementQuantity = () => {
        setQuantity(prev => prev + 1);
      };

      const decrementQuantity = () => {
        if (quantity > 1) {
          setQuantity(prev => prev - 1);
        }
      };

    return(
        <div className="flex items-center border-2 rounded-xl px-3 py-3 border-gray-300">
        <button
          onClick={decrementQuantity}
          className="pr-4 text-xl"
        >
          -
        </button>
        <span className="px-4">{quantity}</span>
        <button
          onClick={incrementQuantity}
          className="pl-4 text-xl "
        >
          +
        </button>
      </div>
    );
}

export default ButtonIncrement;