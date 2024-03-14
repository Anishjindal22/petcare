import React, { useEffect } from "react";
import ProductItems from "./ProductItems";
import { getProducts } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../Loader/Loader";

const Products = () => {
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div>
          {products &&
            products.map((product) => (
              <ProductItems product={product} key={product.id} />
            ))}
        </div>
      )}
    </div>
  );
};

export default Products;
