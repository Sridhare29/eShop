import React from 'react'
import './Styles/Product.css';

function Product({id ,title,image,price,rating}) {
  return (
    <div>
      <div className="product">
        <div className="product_info">
          <p>{title}</p>
          <p className="product_price">{price} </p>
          <p className="product_rating">
            {Array(rating)
            .fill()
            .map((_,i)=> 
            (
              <p>⭐️</p>
            ))}
          </p>
        </div>
        <img src= {image}/>
        <button className='product_btn'>Buy</button>
      </div>
    </div>
  )
}

export default Product