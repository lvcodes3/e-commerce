import { PiShoppingCart, PiShoppingCartFill } from "react-icons/pi";

export const Navbar = () => {
  return (
    <nav className="w-screen h-[60px] flex justify-center items-center bg-[#314d72]">
      <h1 className="text-3xl font-bold text-white">Aaron's Mechanics</h1>
      <PiShoppingCart />
    </nav>
  );
};
