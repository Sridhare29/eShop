import React from "react"
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SearchIcon from '@mui/icons-material/Search';
import './Styles/Header.css';

function Header() {
    return (
        <div className="header">
            <div className="header_logo">
                <StorefrontIcon className='header_logoImage' fontSize='large'></StorefrontIcon>
                <h2 className='header_logotitle'>e-shop</h2>
            </div>
            <div className="header_search">
                <input type='text' className='header_searchTitle' />
                <SearchIcon className='header_SearchIcon' fontSize='large' />
            </div>
            <div className="header_nav">
                <div className="nav_item">
                    <span className="nav_itemLineOne">Hello Guest</span>
                    <span className="nav_itemLineTwo">Sign In</span>
                </div>
                <div className="nav_item">
                    <span className="nav_itemLineOne">Your</span>
                    <span className="nav_itemLineTwo">Shop</span>
                </div>
                <div className="nav_item">
                    <ShoppingBasketIcon className='header_shopingBasket' fontSize='large'></ShoppingBasketIcon>
                    <span className="nav_itemLineTwo">0</span>
                </div>
            </div>
        </div>
    )
}
export default Header