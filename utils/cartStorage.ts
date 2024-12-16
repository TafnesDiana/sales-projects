interface CartItem {
    id: number;
    name: string;
    color: string;
    size: string;
    quantity: number;
    image: string;
    price: number; 
  }
  
  export const getCart = (): CartItem[] => {
    if (typeof window !== "undefined") {
      const cart = localStorage.getItem("cart");
      return cart ? JSON.parse(cart) : []; 
    }
    return [];
  };
  
  export const addToCart = (item: CartItem): void => {
    if (typeof window !== "undefined") {
      const cart = getCart();
      const existingItemIndex = cart.findIndex(
        (cartItem) =>
          cartItem.id === item.id &&
          cartItem.size === item.size &&
          cartItem.color === item.color
      );
  
      if (existingItemIndex > -1) {
        cart[existingItemIndex].quantity += item.quantity;
      } else {
        cart.push(item);
      }
  
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  };
  
  export const removeFromCart = (id: number, size: string, color: string): void => {
    if (typeof window !== "undefined") {
      const cart = getCart();
      const updatedCart = cart.filter(
        (item) => !(item.id === id && item.size === size && item.color === color)
      );
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
  };
  
  // Limpa todo o carrinho
  export const clearCart = (): void => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("cart"); // Limpa o carrinho do Local Storage
    }
  };
  
  // Atualiza a quantidade de um item no carrinho
  export const updateItemQuantity = (id: number, size: string, color: string, quantity: number): void => {
    if (typeof window !== "undefined") {
      const cart = getCart();
      const updatedCart = cart.map((item) => {
        if (item.id === id && item.size === size && item.color === color) {
          return { ...item, quantity };
        }
        return item;
      });
      localStorage.setItem("cart", JSON.stringify(updatedCart)); // Atualiza o Local Storage
    }
  };
  