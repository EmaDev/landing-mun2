import { DataNosotrosInterface } from '@/interfaces';
import Image from 'next/image';
import React from 'react';

interface Props {
    classes: string;
    data: DataNosotrosInterface;
}
export const CardSobreNosotros = ({classes, data}:Props) => {
  return (
    <div className={`bg-orange-100 p-8 tablet:max-w-[450px] rounded-md ${classes}`}>
        <h3 className='font-Poppins font-bold text-xl tablet:text-2xl mb-5'>{data.titulo}</h3>
        <p>{data.descripcion}</p>

        <div className='m-auto mt-6 bg-gray-100 w-[90%] max-h-[250px] overflow-hidden'>
            <Image alt="" src={data.imagen}
             style={{width: "100%", height: "auto", margin: "auto"}}
             className='block rounded-md opacity-80 transition duration-300 transform hover:opacity-100'
             />
        </div>
    </div>
  )
}
