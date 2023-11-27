import React from 'react'
import './Styles/Product.css';

function Product() {
  return (
    <div>
      <div className="product">
        <div className="product_info">
          <p>Canva Camera</p>
          <p className="product_price">$30 </p>
          <p className="product_rating">⭐️⭐️⭐️</p>
        </div>
        <img src='https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt='product_image'/>
        <button className='product_btn'>Buy</button>
      </div>
    </div>
  )
}

export default Product