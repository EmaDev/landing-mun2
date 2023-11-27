import React from 'react';
import { TiStarFullOutline } from "react-icons/ti";

const images = [
    "https://bright.tailwindawesome.com/_next/image?url=%2Fimages%2Fstock%2Ftestimonials%2Ftestimonial-02.jpg&w=256&q=75",
    "https://bright.tailwindawesome.com/_next/image?url=%2Fimages%2Fstock%2Ftestimonials%2Ftestimonial-03.jpg&w=96&q=75",
    "https://bright.tailwindawesome.com/_next/image?url=%2Fimages%2Fstock%2Ftestimonials%2Ftestimonial-04.jpg&w=256&q=75",
    "https://bright.tailwindawesome.com/_next/image?url=%2Fimages%2Fstock%2Ftestimonials%2Ftestimonial-01.jpg&w=256&q=75"

]

interface Props {
    value: number;
}
export const CardOpinion = ({ value }: Props) => {
    return (
        <div className='min-w-[220px] max-w-[240px] h-[300px] bg-white rounded-lg shadow-lg'>
            <div className='m-4 text-xs'>
                <img src={images[value]} className='rounded-full w-[40px] h-[40px] mb-3'
                    style={{ objectFit: "cover" }} />
                <p className='font-bold text-lg'>Nombre</p>
                <div className='flex gap-2 text-yellow-500'>
                    <TiStarFullOutline />
                    <TiStarFullOutline />
                    <TiStarFullOutline />
                    <TiStarFullOutline />
                </div>
            </div>

            <p className='mx-4 text-sm'>
            "Donec sollicitudin molestie malesuada. Donec rutrum congue leo eget malesuada. 
            Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus."
            </p>
        </div>
    )
}
