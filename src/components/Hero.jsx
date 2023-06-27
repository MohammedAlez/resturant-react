import React from 'react'
export const Hero = () => {
    return (
        <div className='max-w-[1200px] mx-auto p-4'>
            <div className='relative max-h-[500px]'>
                {/* overLay */}
                <div className='absolute w-full max-h-[500px] bg-black/60 h-full text-gray-200 flex flex-col justify-center'>
                    <h1 className='px-4 text-4xl sm-text-5xl md:text-6xl lg-7xl font-bold'>The <span className='text-orange-500'>Best</span></h1>
                    <h1 className='px-4 text-4xl sm-text-5xl md:text-6xl lg-7xl font-bold'><span className='text-orange-500'>Foods </span>Delivered</h1>
                </div>
                <img className='w-full max-h-[500px] object-cover' src="https://images.pexels.com/photos/1639565/pexels-photo-1639565.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </div>
        </div>
    )
}
