import React, { useEffect, useState } from "react";
import LoadingSpinner from "../../components/LoadingSpinner";
import ProductsCard from "../../components/ProductsCard";
import Filter from "../../components/Filter";
import { fetchProducts } from "../../api/get";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then((res) => setProducts(res));
  }, []);

  const filterHandler = (filterItem) => {
    if (filterItem === "acc") {
      const sortedList = [...products].sort((a, b) => a.price - b.price);
      setProducts(sortedList);
    } else {
      const sortedList = [...products].sort((a, b) => b.price - a.price);
      setProducts(sortedList);
    }
  };

  return (
    <>
      <Filter onFiltrtHandler={filterHandler} />
      {products.length > 0 ? (
        <ProductsCard products={products} />
      ) : (
        <div className="flex justify-center items-center ">
          <LoadingSpinner />
        </div>
      )}
    </>
  );
};

export default Home;
