import React, { useState } from 'react';
import Header from './Header';
import Gallery from './Gallery';
import Cart from './Cart';


const products = [
  {
    id: 1,
    images: ['twisted-love.jpeg','twisted-games.jpeg','twisted-hate.jpeg','twisted-lies.jpeg'],
    name: 'Twisted Series',
    description: 'By Anna Huang',
    price: 49.99,
  },
  {
    id: 2,
    images: ['it-ends-with-us.jpeg', 'it-starts-with-us.jpeg'],
    name: 'With Us Series',
    description: 'By Collen Hover',
    price: 29.99,
  },
  {
    id: 3,
    images: ['shatter-me.jpeg','unravel-me.jpeg','ignite-me.jpeg'] ,
    name: 'Me Series',
    description: 'By Tahereh Mafi',
    price: 49.99,
  },
  {
    id: 4,
    images: ['king-of-wrath.jpeg','king-of-pride.jpeg','king-of-greed.jpeg','king-of-sloth.jpeg'],
    name: 'King Of Series',
    description: 'By Anna Huang',
    price: 49.99,
  },
  {
    id: 5,
    images: ['things-we-never-got-over.jpeg','things-we-left-behind.jpeg','things-we-hide-from-the-light.jpeg'],
    name: 'Things We Series',
    description: 'By Lucy Score',
    price: 39.99,
  },
  {
    id: 6,
    images:['Icebraker.jpeg','Wildfire.jpeg','Daydream.jpeg'],
    name: 'Icebraker',
    description: 'By Hannah Grace',
    price: 39.99,
  },
  {
    id: 7,
    images:['My-Fault.jpeg','Your-Fault.jpeg','public/Our-Fault.jpeg'],
    name: 'My Series',
    description: 'Mercedes Ron',
    price: 39.99,
  },
  {
    id: 8,
    images:['The-Cruel-Prince.jpeg','The-Queen-Of-Nothing.jpeg','The-Wicked-King.jpeg'],
    name: 'The Cruel Prince',
    description: 'Holly Black',
    price: 39.99,
  }
];

const App = () => {
  const [cart, setCart] = useState([]);
  const [isCart, setIsCart] = useState(false); 

  const addToCart = (product) => {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
      setCart(cart.map(item => 
        item.id === product.id ? { ...existingProduct, count: existingProduct.count + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, count: 1 }]);
    }
  };

  const updateCart = (id, count) => {
    if (count === 0) {
      setCart(cart.filter(item => item.id !== id));
    } else {
      setCart(cart.map(item => 
        item.id === id ? { ...item, count } : item
      ));
    }
  };

  return (
    <div className="app h-auto bg-[rgb(44,44,44)]">
      <Header setIsCart={setIsCart} isCart={isCart} />
      <div className="flex gap-5 mt-5">
        <Gallery className="left" products={products} addToCart={addToCart} />
        {isCart && ( // Conditionally render Cart based on isCart state
          <Cart className="right" cart={cart} updateCart={updateCart} setIsCart={setIsCart} isCart={isCart} />
        )}
      </div>
    </div>
  );
}
  export default App;
  