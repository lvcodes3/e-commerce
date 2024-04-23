import { useState, createContext, useContext } from "react";

type ShoppingCartContext = {
  getCartQuantity: () => number;
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
};
const ShoppingCartContext = createContext({} as ShoppingCartContext);

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

type CartItem = {
  id: number;
  quantity: number;
};

type ShoppingCartProviderProps = {
  children: React.ReactNode;
};
export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [cartItem, setCartItem] = useState<CartItem>();

  const getCartQuantity = () => {
    return cartItem?.quantity || 0;
  };

  const increaseCartQuantity = (id: number) => {
    if (cartItem) {
      setCartItem({ id, quantity: cartItem.quantity + 1 });
    }
  };

  const decreaseCartQuantity = (id: number) => {
    if (cartItem) {
      if (cartItem.quantity > 0) {
        setCartItem({ id, quantity: cartItem.quantity - 1 });
      }
    }
  };

  return (
    <ShoppingCartContext.Provider
      value={{ getCartQuantity, increaseCartQuantity, decreaseCartQuantity }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
