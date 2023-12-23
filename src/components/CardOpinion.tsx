import { TestimonioInterface } from '@/interfaces';
import React from 'react';
import { TiStarFullOutline } from "react-icons/ti";

interface Props {
    data: TestimonioInterface;
}
export const CardOpinion = ({ data }: Props) => {

    const renderCalificacion = (cantidad: number) => {
        const arr = Array.from({ length: cantidad }, (_, index) => index + 1);

        return arr.map((calif) => (
            <TiStarFullOutline key={calif} />
        ))

    }


    return (
        <div className='min-w-[240px] max-w-[250px] min-h-[300px] bg-white rounded-lg shadow-lg pb-6'>
            <div className='m-4 text-xs'>
                <img alt="" src={data.imagenURL} className='rounded-full w-[40px] h-[40px] mb-3'
                    style={{ objectFit: "cover" }} />
                <p className='font-bold text-lg'>{data.usuario}</p>
                <div className='flex gap-2 text-yellow-500'>
                    {renderCalificacion(data.calificacion)}
                </div>
            </div>

            <p className='mx-4 text-sm'>{data.texto}</p>
        </div>
    )
}
