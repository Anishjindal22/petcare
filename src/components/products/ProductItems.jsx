import React from "react";
import ReactStars from "react-rating-stars-component";
import { useDispatch } from "react-redux";
import { addToCart } from "../../actions/cartActions";

const ProductItems = ({ product }) => {
  const dispatch = useDispatch();

  const options = {
    edit: false,
    color: "rgba(20,20,20,0.1)",
    activeColor: "tomato",
    value: product.ratings,
    isHalf: true,
  };

  const handleAddToCart = () => {
    dispatch(addToCart(product));
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
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductItems;
