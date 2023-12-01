import React from 'react'
import Product from './Product'
import './Styles/Home.css'
function Home() {
    return (
        <div className='home'>
            <img src='https://c0.wallpaperflare.com/preview/389/615/630/business-businessman-communication-concept.jpg' alt='main_banner' className='home_Banner' />
            <div className='home_row'>
                <Product 
                id = "101"
                title = "Iphone 15 Pro"
                price = {3000.5}
                rating = {4}
                image = "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-finish-select-202309-6-7inch-green?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692923784465"
                />
                <Product 
                id = "102"
                title = "Iphone 15"
                price = {12999}
                rating = {5}
                image = "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-blue?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692923777972"
                />
                <Product 
                id = "103"
                title = "Iphone 15 Plus"
                price = {2000.9}
                rating = {3}
                image = "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-finish-select-202309-6-7inch-black?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692923781972"
                />
            </div>
            <div className='home_row'>
            <Product 
            id = "104"
                title = "iWatch Nike"
                price = {69.0}
                rating = {2}
                image = "https://www.apple.com/in/apple-watch-nike/images/overview/pretty_face__fd02mn4mhg6e_large_2x.jpg"
                />
                <Product 
                id = "105"
                title = "iWatch Strap"
                price = {750.5}
                rating = {2}
                image = "https://www.apple.com/v/apple-watch-nike/af/images/overview/bands_sport_loop__dg8k5zbh38eq_large_2x.jpg"
                />
                <Product 
                id = "106"
                title = "Iphone 14 Pro"
                price = {69.0}
                rating = {5}
                image = "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-blue?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692923777972"
                />
            </div>
            <div className='home_row'>
            <Product 
            id = "107"
                title = "Iphone 14 "
                price = {20.5}
                rating = {4}
                image = "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-finish-select-202309-6-1inch-blue?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692923777972"
                />            </div>
        </div>
    )
}

export default Home