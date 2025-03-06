import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import Home from './Components/Home';
import Cart from './Components/Cart';

function App() {
  const [users, setUser] = useState([]);
  const [cart, setCart] = useState([]);

  

  const fetchData = async () => {

      const response = await axios.get("https://fakestoreapi.com/products/");
      setUser(response.data); 
      
  };
    fetchData(); 


  return (
    <>

<Cart cart={cart} setCart={setCart}/>
   
  
 
    <div className='flex flex-wrap'>
    {users.map((item)=>(
   
      <Home item={item} setCart={setCart} cart={cart}/>
    
 
 ))}
  </div>
  
  </>
  );
}


export default App;
