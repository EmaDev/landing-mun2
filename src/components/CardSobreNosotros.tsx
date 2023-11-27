import Image from 'next/image';
import React from 'react';

interface Props {
    classes: string;
    img: number
}
export const CardSobreNosotros = ({classes, img}:Props) => {
  return (
    <div className={`bg-orange-100 p-8 tablet:max-w-[450px] rounded-md ${classes}`}>
        <p className='font-Poppins font-bold text-xl mb-5'>Nuestro Equipo</p>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean et tortor at 
        risus viverra adipiscing at in.
        </p>

        <div className='m-auto mt-6 bg-gray-100 w-[90%] max-h-[250px] overflow-hidden'>
            <Image alt="" src={require(`../assets/nosotros/${img}.jpeg`)}
             style={{width: "100%", height: "auto", margin: "auto"}}
             className='block rounded-md opacity-80 transition duration-300 transform hover:opacity-100'
             />
        </div>
    </div>
  )
}
