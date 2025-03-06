import React from 'react'
import './Cart.css'
import { useState } from 'react';


function Cart({cart,setCart}) {
    const [isOverlayVisible, setOverlayVisible] = useState(false);

    const toggleOverlay = () => {
        setOverlayVisible(!isOverlayVisible);
      };

      
      const removecart = (item) => {
            const updatedCart = cart.filter(items => items.id !== item.id);
            setCart(updatedCart);
          };
   
   
      
  return (
    <div className="App">
     <div>
      <ul className='bg-green-500  flex justify-between p-4 font-bold text-lg'>
               <li className='text-white'>Online Store</li>
               <button className="view-cart-button" onClick={toggleOverlay}>
        View Cart ({cart.length})
      </button>
        </ul>
        {isOverlayVisible && (
        <div className="overlay">
          <div className="overlay-content">
            <h2>Your Cart</h2>
            <div className='flex flex-wrap'>
              {cart.map(item => (
             
                <div className="product-item w-54 m-2 m-2 flex flex-col justify-center list-none  border-2 border-gray-200 " key={item.id}>
                    <img className='' src={item.image}></img>
                <h1 className='text-blue-500 font-bold ml-4 flex justify-center '>{item.title}</h1>
                <h1 className='text-blue-500 font-bold ml-4 flex justify-center'>{item.category}</h1>
                <p className='flex justify-between font-bold'>${item.price}</p>
                   <button className='bg-red-500 rounded-full px-2 text-white font-bold' onClick={()=>removecart(item)} >Remove From Cart</button>
                </div>
               
              ))}
           </div>
            <button className="close-overlay" onClick={toggleOverlay}>
              Close Cart
            </button>
          </div>
        </div>
      )}
       </div>
        </div>
    )}
export default Cart
