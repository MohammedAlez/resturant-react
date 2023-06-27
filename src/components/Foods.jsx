import React, { useState } from 'react'
import {data} from '../data/data.js'
export const Foods = () => {
    // console.log(data);
    const [foods,setFoods] = useState(data);
    const filterType=(category)=>{
        setFoods(
            data.filter((i)=>i.category===category)
        )
    }
    const filterPrice=(price)=>{
        setFoods(
            data.filter((i)=>i.price===price)
        )
    }
    return (
        <div className='max-w-[1200px] mx-auto my-12 p-4'>
            <h1 className='m-auto text-orange-600 font-bold w-fit text-2xl sm:text-3xl md:text-4xl mb-12'>Top Rated Menu Items</h1>
            {/* filter row*/}
            <div className='flex flex-col gap-4 sm:flex-row sm:justify-between'>
                {/* filter type */}
                <div className="">
                    <p className='text-md mb-2 font-bold'>filter type</p>
                    <div>
                        <button onClick={()=>setFoods(data)} className='px-2 py-1 font-bold border-orange-500 mx-[3px] hover:bg-orange-500 hover:text-white duration-300 rounded-full border text-orange-500'>All</button>
                        <button onClick={()=>filterType("burger")} className='px-2 py-1 font-bold border-orange-500 mx-[3px] hover:bg-orange-500 hover:text-white duration-300 rounded-full border text-orange-500'>Burger</button>
                        <button onClick={()=>filterType("pizza")} className='px-2 py-1 font-bold border-orange-500 mx-[3px] hover:bg-orange-500 hover:text-white duration-300 rounded-full border text-orange-500'>Pizza</button>
                        <button onClick={()=>filterType("salad")} className='px-2 py-1 font-bold border-orange-500 mx-[3px] hover:bg-orange-500 hover:text-white duration-300 rounded-full border text-orange-500'>Salad</button>
                        <button onClick={()=>filterType("chicken")} className='px-2 py-1 font-bold border-orange-500 mx-[3px] hover:bg-orange-500 hover:text-white duration-300 rounded-full border text-orange-500'>Chicken</button>
                    </div>
                </div>
                {/* filter price  */}
                <div className="">
                    <p className='text-md mb-2 font-bold'>filter price</p>
                    <div>
                        <button onClick={()=>filterPrice("$")} className='px-2 py-1 font-bold border-orange-500 mx-[3px] hover:bg-orange-500 hover:text-white duration-300 rounded-full border text-orange-500'>$</button>
                        <button onClick={()=>filterPrice("$$")} className='px-2 py-1 font-bold border-orange-500 mx-[3px] hover:bg-orange-500 hover:text-white duration-300 rounded-full border text-orange-500'>$$</button>
                        <button onClick={()=>filterPrice("$$$")} className='px-2 py-1 font-bold border-orange-500 mx-[3px] hover:bg-orange-500 hover:text-white duration-300 rounded-full border text-orange-500'>$$$</button>
                        <button onClick={()=>filterPrice("$$$$")} className='px-2 py-1 font-bold border-orange-500 mx-[3px] hover:bg-orange-500 hover:text-white duration-300 rounded-full border text-orange-500'>$$$$</button>
                    </div>
                </div>
            </div>

            {/* display the foods */}
            <div className='grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 p-1 gap-5 mt-12'>
                {
                    foods.map((item,index)=>(
                        <div className='border duration-300 rounded-xl truncate cursor-pointer hover:scale-105' key={index}>
                            <img className='w-full h-[200px] object-cover' src={item.image} alt={item.name} />
                            <div className='flex justify-between p-2 items-center'>
                                <p className='font-bold'>{item.name}</p>
                                <p className='font-bold text-green-600 rounded-full p-1'>{item.price}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
