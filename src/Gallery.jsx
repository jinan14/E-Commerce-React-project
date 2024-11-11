

import React from 'react';
import Card from './Card';

const Gallery = ({ products, addToCart }) => {
  return (
    <div className=" gallery grid grid-cols-4 gap-5 p-5 bg-cover rounded-lg border border-gray-300 shadow-md" style={{ backgroundImage: "url('/background.jpeg')" }}>
      {products.map((product, index) => (
        <Card 
          key={product.id} 
          product={product} 
          addToCart={addToCart} 
          index={index} 
        />
      ))}
    </div>
  );
};

export default Gallery;
