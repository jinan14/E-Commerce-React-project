

import React, { useState } from 'react';
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";

const Card = ({ product, addToCart, index }) => {
    const [imageIndex, setImageIndex] = useState(0);

    const moveLeft = () => {
        if (imageIndex > 0) {
            setImageIndex(imageIndex - 1);
        } else {
            setImageIndex(product.images.length - 1);
        }
    };

    const moveRight = () => {
        if (imageIndex < product.images.length - 1) {
            setImageIndex(imageIndex + 1);
        } else {
            setImageIndex(0);
        }
    };

    return (
        <div className="card1 flex flex-col gap-2 border border-gray-300 bg-[rgb(44,44,44)] p-4 rounded-lg text-white transition-transform transform hover:scale-105 hover:shadow-lg">
            <div className="flex flex-col h-5/6 p-2 gap-2">
                <img src={product.images[imageIndex]} alt={product.name} className="w-full h-9/10 object-cover" />
                <div className='flex justify-between h-1/6'>
                    <button className="flex items-center justify-center p-2 w-8 h-8 text-white bg-[rgb(167,6,86)] rounded-full hover:bg-[rgb(212,51,132)]" onClick={moveLeft}><SlArrowLeft /></button>
                    <button className="flex items-center justify-center p-2 w-8 h-8 text-white bg-[rgb(167,6,86)] rounded-full hover:bg-[rgb(212,51,132)]" onClick={moveRight}><SlArrowRight /></button>
                </div>
            </div>
            <div className='flex flex-col justify-between text-sm h-3/10'>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p>${product.price.toFixed(2)}</p>
                <button
                    className="p-2 mt-5 font-semibold bg-[rgb(167,6,86)] text-white rounded-lg hover:bg-[rgb(212,51,132)]"
                    onClick={() => addToCart(product)}
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );

};

export default Card;
