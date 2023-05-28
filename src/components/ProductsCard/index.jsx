import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import { BsCart3 } from "react-icons/bs";
import StarCreator from "./StarCreator";

const ProductsCard = ({ products = [] }) => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);

  const addToCartHandler = (id, title, price, image) => {
    const existingItem = [...items].find((item) => item.id === id);
    console.log(existingItem);

    let newList = [];
    if (existingItem) {
      const filtredList = [...items].filter(
        (item) => item.id !== existingItem.id
      );
      newList = [
        ...filtredList,
        { ...existingItem, quantity: existingItem.quantity + 1 },
      ];
    } else {
      newList = [...items, { quantity: 1, id, title, price, image }];
    }
    dispatch(cartActions.addItemToCart(newList));
  };

  const truncateDescribe = (str) => {
    return str.length > 60 ? str.substring(0, 50) + "..." : str;
  };

  const truncateTitle = (str) => {
    return str.length > 50 ? str.substring(0, 40) + "..." : str;
  };
  return (
    <section className="text-gray-600 body-font -mt-24 py-[2%]">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {products.map((product) => {
            const { id, title, price, description, image } = product;

            return (
              <div className="p-4 md:w-1/4">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-2xl overflow-hidden hover:bg-purple-200 hover:shadow-purple-950 hover:shadow-lg">
                  <img
                    className="lg:h-48 md:h-36 w-full  object-center object-contain"
                    src={image}
                    alt={title}
                  />

                  <div className="p-6">
                    <div className="flex gap-24">
                      <Link to={`/products/${id}`}>
                        <button className="tracking-widest text-xs title-font font-medium text-gray-100 mb-1 bg-orange-600 rounded-2xl py-1 px-3 mt-1">
                          detail
                        </button>
                      </Link>
                      <StarCreator />
                    </div>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                      {truncateTitle(title)}
                    </h1>
                    <p className="leading-relaxed mb-3">
                      {truncateDescribe(description)}
                    </p>
                    <div className="flex items-center flex-wrap ">
                      <p className="text-purple-600 inline-flex items-center md:mb-2 lg:mb-0">
                        ${price}
                      </p>
                      <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 ">
                        <button
                          onClick={() =>
                            addToCartHandler(id, title, price, image)
                          }
                          className="inline-flex items-center bg-purple-600 border-0 py-1 px-3 focus:outline-none hover:bg-purple-700 rounded text-base mt-4 md:mt-0 text-white"
                        >
                          <BsCart3 />
                        </button>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductsCard;
