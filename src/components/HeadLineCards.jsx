import React from 'react'

export const HeadLineCards = () => {
    return (
        <div className='py-12 max-w-[1200px] grid mx-auto px-5 md:grid-cols-3 gap-5 '>
            {/* card */}
            <div className='truncate rounded-xl relative text-white max-h-[160px]'>
                {/* overLay */}
                <div className='absolute bg-black/50 hover:bg-transparent duration-300 w-full h-full p-3 flex flex-col justify-between'>
                    <div>
                        <p className='font-bold text-xl'>Sun's Out, BoGo's Out</p>
                        <p className='text-xl'>Through 8/26</p>
                    </div>
                    <button className='object-cover duration-100  w-fit bg-white text-black rounded-full p-2 font-bold text-sm  hover:bg-orange-600 hover:text-white'>Order Now</button>
                </div>
                <img src="https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </div>
            <div className='truncate rounded-xl relative text-white max-h-[160px]'>
                {/* overLay */}
                <div className='absolute bg-black/50 hover:bg-transparent duration-300 w-full h-full p-3 flex flex-col justify-between'>
                    <div>
                        <p className='font-bold text-xl'>New Resturant</p>
                        <p className='text-xl'>Added daily</p>
                    </div>
                    <button className='object-cover duration-100  w-fit bg-white text-black rounded-full p-2 font-bold text-sm  hover:bg-orange-600 hover:text-white'>Order Now</button>
                </div>
                <img src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </div>
            <div className='truncate rounded-xl relative text-white max-h-[160px]'>
                {/* overLay */}
                <div className='absolute bg-black/50 hover:bg-transparent duration-300 w-full h-full p-3 flex flex-col justify-between'>
                    <div>
                        <p className='font-bold text-xl'>We Deliver Disserts too</p>
                        <p className='text-xl'>Tasty Treats</p>
                    </div>
                    <button className='object-cover duration-100  w-fit bg-white text-black rounded-full p-2 font-bold text-sm  hover:bg-orange-600 hover:text-white'>Order Now</button>
                </div>
                <img src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </div>
        </div>
    )
}
