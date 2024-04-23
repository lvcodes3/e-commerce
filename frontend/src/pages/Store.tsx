import { useState, useEffect } from "react";
import axios from "axios";
import { RotatingLines } from "react-loader-spinner";
import { useShoppingCart } from "../context/shoppingCartContext";

interface Item {
  id: number;
  name: string;
  description: string;
  category: string;
  price: number;
  quantity: number;
  images: string[];
  status: string;
}

const Store = () => {
  const { getCartQuantity, increaseCartQuantity, decreaseCartQuantity } =
    useShoppingCart();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [item, setItem] = useState<Item | null>(null);

  useEffect(() => {
    const getItem = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/v1/inventory/get"
        );
        if (response.status === 200) {
          console.log(response.data);
          setItem(response.data.rows[0]);
        } else {
          throw new Error("Failed to fetch item.");
        }
      } catch (err: any) {
        console.log(`Error: ${err.message}`);
      } finally {
        setIsLoading(false);
      }
    };
    getItem();
  }, []);

  const addToCart = () => {
    if (item) {
      increaseCartQuantity(item.id);
      /*
      // existing cart //
      if (
        localStorage.getItem("item_name") &&
        localStorage.getItem("item_quantity") &&
        localStorage.getItem("item_price")
      ) {
        if (cartQuantity !== null) {
          setCartQuantity(cartQuantity + selectQuantity);
          localStorage.setItem(
            "item_quantity",
            (cartQuantity + selectQuantity).toString()
          );
        }

        let prevPrice: string | null = localStorage.getItem("item_price");
        if (prevPrice !== null) {
          localStorage.setItem(
            "item_price",
            (parseFloat(prevPrice) + item.price * selectQuantity).toString()
          );
        }
      }
      // empty cart //
      else {
        setCartQuantity(selectQuantity);
        localStorage.setItem("item_name", item.name);
        localStorage.setItem("item_quantity", selectQuantity.toString());
        localStorage.setItem(
          "item_price",
          (item.price * selectQuantity).toString()
        );
      }
      */
    }
  };

  const removeFromCart = () => {
    if (item) {
      decreaseCartQuantity(item.id);
    }
  };

  return (
    <div className="w-screen min-h-[calc(100vh-100px)] h-full bg-slate-200">
      {isLoading ? (
        <div className="w-full h-full flex justify-center">
          <RotatingLines
            visible={true}
            width="50"
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
          />
        </div>
      ) : (
        item &&
        item.quantity > 0 &&
        item.status === "active" && (
          <div className="w-full h-full py-5 flex flex-col items-center gap-y-8">
            <h1 className="text-2xl font-bold">{item.name}</h1>
            <div className="w-[200px] sm:w-[500px] md:w-screen flex flex-wrap justify-center gap-x-4 gap-y-2">
              {item.images.map((image, index) => (
                <div
                  className="w-[200px] h-[200px] flex justify-center items-center"
                  key={index}
                >
                  <img
                    className="max-w-full max-h-full"
                    src={image}
                    alt={item.name}
                  />
                </div>
              ))}
            </div>
            <p className="text-lg font-medium">{item.description}</p>
            {item.quantity < 100 && (
              <p className="text-lg font-medium">
                Only {item.quantity} left in stock!
              </p>
            )}
            <p className="text-lg font-medium">${item.price}</p>
            <div className="flex justify-center items-center gap-x-2">
              <button
                className="p-2 font-medium cursor-pointer rounded-full border-2 border-black"
                onClick={removeFromCart}
              >
                -
              </button>
              <p>{getCartQuantity()}</p>
              <button
                className="p-2 font-medium cursor-pointer rounded-full border-2 border-black"
                onClick={addToCart}
              >
                +
              </button>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Store;
