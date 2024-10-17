import React, { useState, useEffect } from 'react';
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";

const Cart = ({ cart, updateCart, isCart, setIsCart }) => {
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        let total = 0;
        cart.forEach(item => {
            total += item.price * item.count;
        });
        setTotalPrice(total);
    }, [cart]);

    return (
        <div className="cart flex flex-col gap-2 w-4/5 p-5 bg-cover text-black rounded-lg border border-gray-300 shadow-md items-center" style={{ backgroundImage: "url('../public/background.jpeg')" }}>
            <h2 className='font-bold animate-fade-in'>Your Cart</h2>
            <button onClick={() => setIsCart(false)} className="w-5 h-5 flex items-center justify-center rounded-full bg-[rgb(167,6,86)] text-white hover:bg-[rgb(212,51,132)]"><RxCross2 /></button>

            <div className="scroll flex flex-col overflow-y-auto max-h-[140vh] w-full scrollable"> {/* Updated to include scrollable class */}
                {cart.length === 0 ? (
                    <p className="animate-fade-in">Your cart is empty</p>
                ) : (
                    <div>
                        {cart.map(item => (
                            <div className="col flex items-center w-full p-3 justify-between animate-slide-in" key={item.id}>
                                <div className="flex flex-col gap-2 w-1/3">
                                    <img src={item.images[0]} alt={item.name} className="w-full object-cover" />
                                </div>
                                <div className=" flex flex-col w-2/3 p-2">
                                    <h3 className="text-center mb-3">{item.name}</h3>
                                    <div className="cartBelow flex justify-between">
                                        <p>${item.price.toFixed(2)}</p>
                                        <p>x {item.count}</p>
                                        <div className="flex gap-2">
                                            <button className="w-5 h-5 flex items-center justify-center rounded-full bg-[rgb(167,6,86)] text-white hover:bg-[rgb(212,51,132)]" onClick={() => updateCart(item.id, item.count + 1)}><FaPlus /></button>
                                            <button className="w-5 h-5 flex items-center justify-center rounded-full bg-[rgb(167,6,86)] text-white hover:bg-[rgb(212,51,132)]" onClick={() => updateCart(item.id, item.count - 1)} disabled={item.count <= 1}><FaMinus /></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <h3 className='font-bold'>Total: ${totalPrice.toFixed(2)}</h3>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;
