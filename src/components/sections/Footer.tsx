import React from 'react';

export const Footer = () => {
    return (
        <footer className='py-10 px-4  bg-red-400 w-full flex flex-col items-center justify-center'>
            <div className='laptop:w-3/4 items-center justify-items-center grid grid-cols-3 gap-10'>
               <div className='w-full h-[70px] bg-orange-500'></div>
               <div className='w-full h-[70px] bg-blue-500'></div>
               <div className='w-full h-[70px] bg-green-500'></div>
            </div>

            <div className='w-3/4 h-[1px] bg-[rgba(0,0,0,0.2)] my-8'></div>
        </footer>
    )
}
