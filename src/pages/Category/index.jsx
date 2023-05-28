import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProductsByCategory } from "../../api/get";
import ProductsCard from "../../components/ProductsCard";
import LoadingSpinner from "../../components/LoadingSpinner";

const Category = () => {
  const [products, setProducts] = useState([]);
  const { productsCategory } = useParams();

  useEffect(() => {
    fetchProductsByCategory(productsCategory).then((res) => setProducts(res));
  }, [productsCategory]);

  return (
    <>
      {products.length > 0 ? (
        <ProductsCard products={products}/>
      ) : (
        <div className="flex justify-center items-center mt-[15%] ">
          <LoadingSpinner />
        </div>
      )}
    </>
  );
};

export default Category;
