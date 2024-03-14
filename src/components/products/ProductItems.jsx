import React from "react";
import ReactStars from "react-rating-stars-component";

const ProductItems = ({ product }) => {
  const options = {
    edit: false,
    color: "rgba(20,20,20,0.1)",
    activeColor: "tomato",
    value: product.ratings,
    isHalf: true,
  };
  return (
    <div className="flex pt-32">
      <img
        src={product.image}
        alt="productimage"
        height={"250px"}
        width={"250px"}
      />
      <p>{`₹${product.price}`}</p>
      <h1>{product.name}</h1>
      <ReactStars {...options} />
    </div>
  );
};

export default ProductItems;
