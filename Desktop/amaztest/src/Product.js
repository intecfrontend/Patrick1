import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price, rating }) {
  const [{}, dispatch] = useStateValue();

  const addToBasket = () => {
    // add item to addShoppingCart...abs
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating
      }
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <p className="product__title">{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map(_ => (
              <span className="product__ratingStar">&#11088;</span>
            ))}
        </div>
      </div>
      <img className="product__image" src={image} alt={image} />
      <button className="product__btn" onClick={addToBasket}>
        Add to basket
      </button>
    </div>
  );
}

export default Product;
