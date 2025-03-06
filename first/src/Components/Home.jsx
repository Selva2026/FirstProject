import React from 'react'
import './Home.css'

 const Home = ({item,setCart,cart}) => {


  const addtocart = (item) => {

   cart.some(items => items.id === item.id)?alert("Item Already Added In Cart"):setCart((prevArray) => [...prevArray, item]);
    
  }

  return (
    
  <div className="product-item w-54 m-2  m-2 list-none border-2 flex-wrap justify-center flex flex-row border-gray-200 " key={item.id}>
    <img src={item.image}></img>
    <div className='flex flex-col justify-center align-center itemv'>
  <h1 className='text-blue-500 font-bold ml-4 flex justify-center '>{item.title}</h1>
  <h1 className='text-blue-500 font-bold ml-4 flex justify-center'>{item.category}</h1>
  <p className='flex justify-center font-bold'>${item.price}</p>
     <button className='bg-green-500 rounded-full px-2 text-white font-bold' onClick={()=>addtocart(item)} >ADD To Cart</button>
  </div>
  </div>
  )
}

export default Home
