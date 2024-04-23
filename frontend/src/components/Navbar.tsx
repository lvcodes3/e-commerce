import { useShoppingCart } from "../context/shoppingCartContext";

import { PiShoppingCart, PiShoppingCartFill } from "react-icons/pi";

export const Navbar = () => {
  const { getCartQuantity } = useShoppingCart();

  return (
    <nav className="w-screen h-[60px] flex justify-center items-center bg-[#314d72]">
      <h1 className="text-3xl font-bold text-white">Aaron's Mechanics</h1>
      <div className="absolute right-3 flex items-center gap-1">
        {cartQuantity ? (
          <>
            <PiShoppingCartFill className="text-3xl text-white" />
            <p className="text-lg text-white">{cartQuantity}</p>
          </>
        ) : (
          <PiShoppingCart className="text-3xl text-white" />
        )}
      </div>
    </nav>
  );
};
