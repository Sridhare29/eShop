import React from 'react'
import Product from './Product'
import './Styles/Home.css'
function Home() {
    return (
        <div className='home'>
            <img src='https://c0.wallpaperflare.com/preview/389/615/630/business-businessman-communication-concept.jpg' alt='main_banner' className='home_Banner' />
            <div className='home_row'>
                <Product />
                <Product />
                <Product />
            </div>
            <div className='home_row'>
                <Product />
                <Product />
                <Product />
            </div>
            <div className='home_row'>
                <Product />
            </div>
        </div>
    )
}

export default Home