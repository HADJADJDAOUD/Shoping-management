import React, { useEffect, useState } from "react";
import { Card } from "flowbite-react";
import axios from "axios";

export default function ProductsList({ category }) {
  const [products, setProducts] = useState([]);

  console.log("ProductsList category:", category); // Debug log

  const fetchProducts = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/products/getAllProducts?category=${category}`
      );
      setProducts(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [category]); // Add category as a dependency

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 grid-cols-1">
      {products.length > 0 ? (
        products.map((product) => (
          <Card className="max-w-sm mx-auto" key={product.id}>
            <div className="max-h-52">
              <img
                className="object-fill w-full h-full"
                src={product.photoUrl}
                alt=""
              />
            </div>
            <a href="#">
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                {product.description}
              </h5>
            </a>
            <div className="mb-5 mt-2.5 flex items-center">
              {/* Rating stars */}
              {[...Array(5)].map((_, index) => (
                <svg
                  key={index}
                  className="h-5 w-5 text-yellow-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
                5.0
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold text-gray-900 dark:text-white">
                $599
              </span>
              <a className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800">
                Add to cart
              </a>
              {product.category}
            </div>
          </Card>
        ))
      ) : (
        <div className="mt-10 text-3xl text-red-600 col-span-4 self-center flex items-center justify-center mb-10 " >
          "there is no products"
        </div>
      )}
    </div>
  );
}
