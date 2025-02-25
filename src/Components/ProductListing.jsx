/*
The product listing and shopping cart pages should have a header. 
The header should have a shopping cart icon with a number that updates dynamically, 
displaying the total number of items in the cart. 
The header should also contain navigation to either of the other pages, depending on which page you are on.

The product listing page should have at least six houseplants for sale, organized into three or more categories. Each plant should have the following details about it:

A thumbnail image
Plant name
Price
An Add to Cart button
*/
import React from 'react';
import { useDispatch } from 'react-redux';
import './ProductListing.css';
import cartimg from './cart.jpg';
import { addToCart } from './cartSlice';

const ProductListing = () => {
    const products = [
                        {id: 1, name: 'Monstera', price: 30}, 
                        {id: 2, name: 'Lily', price: 10}, 
                        {id: 3, name: 'Monstera', price: 30}
                    ];
    const dispatch = useDispatch();
    const handleAddtoCart = (product) => {
        dispatch(addToCart(product));
    }
    return (
        <div>
            <header className='header'>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/cart">Cart</a></li>
                </ul>
            </nav>
            <div className="cart">
                <img src={cartimg} alt="shopping cart" />
                <div className="cart-items">0
                </div>
            </div>
            </header>
            <div className="product-listing">
                {products.map(
                    product => (
                        <li key={product.id} className='product'>
                            <img src={`./${product.name}.jpg`} alt={product.name} />
                            <div>{product.name}</div>
                            <div>${product.price}</div>
                            <button onClick={() => handleAddtoCart(product)}>
                                Add to Cart
                            </button>
                        </li>
                    )
                )}
            </div>
        </div>
    );
}

export default ProductListing;