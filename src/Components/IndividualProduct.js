import React from "react";
import "./indProdStyle.css";
export const IndividualProduct = ({ individualProduct, addToCart }) => {
  // console.log(individualProduct);
  const handleAddToCart = () => {
    addToCart(individualProduct);
  };
  return (
    <>
      {/* <div className='product'>
            <div className='product-img'>
                <img src={individualProduct.url} alt="product-img"/>
            </div>
            <div className='product-text title'>{individualProduct.title}</div>
            <div className='product-text description'>{individualProduct.description}</div>
            <div className='product-text price'>$ {individualProduct.price}</div>
            <div className='btn btn-warning ' onClick={handleAddToCart}>ADD TO CART</div>
        </div>  */}
      <figure class="snip1171">
        <img src={individualProduct.url} alt="product-img" />
        <div class="price">₹{individualProduct.price}</div>
        <figcaption>
          <h3>{individualProduct.title}</h3>
          <p>{individualProduct.description.substring(0, 35)} . . .</p>
          <a href="#" onClick={handleAddToCart}>
            Add to Cart
          </a>
        </figcaption>
      </figure>
    </>
  );
};
