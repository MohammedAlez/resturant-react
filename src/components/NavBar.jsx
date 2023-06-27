import React, { useState } from 'react'
import {AiOutlineClose, AiOutlineMenu, AiOutlineSearch,AiFillTag} from 'react-icons/ai'
import {BsFillCartFill, BsFillSaveFill} from 'react-icons/bs'
import {TbTruckDelivery} from 'react-icons/tb'
import {FaWallet,FaUserFriends} from 'react-icons/fa'
import {MdFavorite,MdHelp} from 'react-icons/md'
export const NavBar = () => {
    const [menu,setMenu] = useState(false);
    return (
        <div className='flex justify-between max-w-[1200px] mx-auto items-center p-4 '>
            {/* left side */}
            <div className='flex items-center'>
                <div className='cursor-pointer ' onClick={()=>setMenu(true)}>
                    <AiOutlineMenu size={25}/>
                </div>
                <h1 className='text-1xl text-xl sm:text-2xl mx-2'>
                    Best <span className='font-bold'>Eats</span>
                </h1>
                <div className='hidden lg:flex rounded-full items-center bg-gray-400'>
                    <p className='p-2 font-bold bg-black text-gray-200 rounded-full text-[14px] '>Delivery</p>
                    <p className='p-2 font-bold text-[14px]'>Pickup</p>
                </div>
            </div>
            {/* search side */}
            <div className="flex rounded-full bg-gray-300  items-center w-[200px] sm:w-[400px] lg:w-[500px]">
                <AiOutlineSearch size={20} className='mx-2 font-bold'/>
                <input className='bg-gray-300 rounded-full p-1 md:p-2 w-full focus:outline-none' type="text" placeholder='Search foods'/>
            </div>
            {/* cart button */}
            <button className="rounded-full bg-black text-white hidden md:flex items-center gap-1 font-bold text-[15px] p-2 px-3">
                <BsFillCartFill className=''/>
                Cart
            </button>
            {/* menu side bar */}

            {/* overLay */}
            {
                menu ? 
                <div onClick={()=>setMenu(false)} 
                    className='fixed bg-black/80 top-0 left-0 w-full h-screen z-10 duration-300'
                ></div> 
                : ""
            }

            {/* menu */}
            <div className={menu 
                ? 'fixed top-0 left-0 w-[300px] bg-white h-screen z-10 duration-300' 
                : 'fixed top-0 w-[300px] bg-white h-screen z-10 duration-300 left-[-300px]'} >
                <AiOutlineClose onClick={()=>setMenu(false)}  size={25} className='absolute top-4 right-4 cursor-pointer'/>
                <h1 className='p-4 text-2xl'>Best <span className='font-bold'>Eats</span></h1>
                <nav>
                    <ul className='p-4 flex flex-col text-gray-800'>
                        <li className='flex py-4 text-xl items-center font-bold'><TbTruckDelivery className='mr-2' size={25}/> Orders</li>
                        <li className='flex py-4 text-xl items-center font-bold'><MdFavorite className='mr-2' size={25}/> Favorites</li>
                        <li className='flex py-4 text-xl items-center font-bold'><FaWallet className='mr-2' size={25}/> Wallet</li>
                        <li className='flex py-4 text-xl items-center font-bold'><MdHelp className='mr-2' size={25}/> Help</li>
                        <li className='flex py-4 text-xl items-center font-bold'><AiFillTag className='mr-2' size={25}/> Promotions</li>
                        <li className='flex py-4 text-xl items-center font-bold'><BsFillSaveFill className='mr-2' size={25}/> Best one</li>
                        <li className='flex py-4 text-xl items-center font-bold'><FaUserFriends className='mr-2' size={25}/> Invite Friends</li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}
