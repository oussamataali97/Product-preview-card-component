import React from 'react'
import img from '../assets/image-product-desktop.jpg'
import logo from '../assets/icon-cart.svg'
function Home() {

  return (
    <div className='flex  md:max-w-lg max-w-md flex-col mx-auto md:flex-row p-5 md:p-0  '>
        <div className="left flex-1 ">
            <img src={img} alt="" className='md:rounded-l-3xl md:h-full h-96 w-full ' />
        </div>
<div className="right p-8 bg-White md:rounded-r-3xl flex-1 ">
<span className='text-gray-500 font-normal tracking-widest p-1'>PERFUME</span> 

<h1 className='font-[Fraunces] text-2xl p-1 md:py-3'>Gabrielle <br/>Essence Eau <br/>De Parfum</h1>

<p className='font-[500] text-[14px] text-gray-500 p-2 md:py-5'>A floral, solar and voluptuous interpretation composed by Olivier Polge, 
Perfumer-Creator for the House of CHANEL.</p> 
<div className="texts flex space-x-2 items-center">
    <p className='font-[Fraunces] font-[700] text-2xl text-DarkCyan'>$149.99</p>
    <p className='font-[Montserrat] font-[500] text-gray-700'>$169.99</p>
</div>
<button className='font-[700] font bg-DarkCyan w-full p-3 mt-4  rounded-lg text-white flex items-center justify-center'><img src={logo} alt="" className='inline mr-4' /> Add to Cart</button>
</div>
   




    </div>
  )
}

export default Home