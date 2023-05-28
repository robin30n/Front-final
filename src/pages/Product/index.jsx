import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../../api/get";

const Product = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  useEffect(() => {
    fetchProductById(id).then((res) => setProduct(res));
  }, []);

 

  return (
    <>
      {product ? (
        <section className="text-gray-600 body-font overflow-hidden">
          <div className="container px-5 py-24 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
              <img
                alt={product?.title}
                className="lg:w-1/2 w-full lg:h-96 h-64 object-contain object-center rounded-md"
                src={product?.image}
              />
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <div className="mb-28">
                  <h1 className="text-gray-900 text-3xl title-font font-medium mb-5">
                    {product?.title}
                  </h1>

                  <p className="leading-relaxed">{product?.description}</p>
                </div>
                <div className="flex">
                  <span className="title-font font-medium text-2xl text-gray-900">
                    ${product?.price}
                  </span>
                  <button
                    className="flex ml-auto text-white bg-purple-600 border-0 py-2 px-6 focus:outline-none hover:bg-purple-700 rounded"
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <p>product not found</p>
      )}
    </>
  );
};

export default Product;
