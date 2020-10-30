import React from "react";
import "./Checkout.css";

function CheckoutProduct({ id, title, image, price, rating }) {
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__img" src={image} alt="" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>

        <p className="checkoutProduct__price">
        <small>$</small>
        <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__ratingcont">
            <span>
              {Array(rating)
                .fill()
                .map(_ => (
                  <span className="product__ratingStar">&#11088;</span>
                ))}
            </span>

            {/* <button
              {/* onClick={removeFromBasket} */}
              {/* className="checkoutProduct__button"
            > */}
              {" "}
              {/* Remove from basket */}
            {/* </button> */} 
          </div>

        
      </div>
    </div>
  );
}

export default CheckoutProduct;
