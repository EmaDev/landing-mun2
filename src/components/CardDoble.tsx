import Image from 'next/image'
import React from 'react'


interface Props {
    image1: any;
    image2: any; 
}
export const CardDoble = ({image1, image2}:Props) => {
  return (
    <div className='grid grid-cols-2 m-auto items-center justify-items-center'>
        <div className='h-[220px] w-[170px] laptop:w-[250px] laptop:h-[300px] bg-grey-50 rounded-lg 
        transition duration-300 transform hover:scale-110 border-2 border-red-300 shadow-lg'>
            <Image alt="productos en nuestras tiendas"
            src={image1}
            style={{height: "100%", width: "100%", objectFit: "cover"}} 
            className='rounded-md opacity-80 transition duration-300 transform hover:opacity-100'
            />
        </div>
        <div className='h-[220px] w-[170px] laptop:w-[250px] laptop:h-[300px] bg-orange-50 rounded-lg mt-8 desktop:mt-16
        transition duration-300 transform hover:scale-110 border-2 border-red-300 shadow-lg'>
            <Image alt="productos en nuestras tiendas"
            src={image2}
            style={{height: "100%", width: "100%", objectFit: "cover"}} 
            className='rounded-md opacity-80 transition duration-300 transform hover:opacity-100'
            />
        </div>
    </div>
  )
}
