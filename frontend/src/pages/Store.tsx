import { useState, useEffect } from "react";

interface Product {
  product_id: number;
  product_name: string;
  product_description: string;
  product_category: string;
  product_price: number;
  product_quantity: number;
  product_image: string;
  product_date_added: string;
  product_last_updated: string;
  product_status: string;
}

const Store = () => {
  const [product, setProduct] = useState<Product>({
    product_id: 0,
    product_name: "",
    product_description: "",
    product_category: "",
    product_price: 0,
    product_quantity: 0,
    product_image: "",
    product_date_added: "",
    product_last_updated: "",
    product_status: "",
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const getProduct = async () => {};
    getProduct();
  }, []);

  return (
    <div className="w-screen h-[calc(100vh-100px)] pt-5 flex justify-center bg-[#5281bf]">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="border-2 border-black shadow-xl">
          <h1>{product.product_name}</h1>
          <img src={product.product_image} alt={product?.product_name} />
          <p>Description: {product.product_description}</p>
        </div>
      )}
    </div>
  );
};

export default Store;
