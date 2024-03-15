import React, { useEffect, useState } from "react";
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

  const [searchQuery, setSearchQuery] = useState("");
  const [searchedProducts, setSearchedProducts] = useState([]);

  useEffect(() => {
    if (products && products.length > 0) {
      const filteredProducts = products.filter((product) =>
        product.name
          .toLowerCase()
          .trim()
          .includes(searchQuery.toLowerCase().trim())
      );
      setSearchedProducts(filteredProducts);
    }
  }, [products, searchQuery]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="container">
      <div className="input-wrapper">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search products..."
        />
      </div>
      {loading ? (
        <div className="loader-container">
          <Loader />
        </div>
      ) : (
        <div>
          {searchedProducts && searchedProducts.length > 0 ? (
            searchedProducts.map((product) => (
              <ProductItems product={product} key={product.id} />
            ))
          ) : (
            <p className="no-products">No products found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Products;
