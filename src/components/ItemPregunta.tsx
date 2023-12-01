"use client";

import { PreguntaFrecuenteInterface } from '@/interfaces';
import React, { useRef, useState } from 'react';
import { PiCaretDownBold } from "react-icons/pi";


interface Props {
    data: PreguntaFrecuenteInterface;
}
export const ItemPregunta = ({data}:Props) => {

    const [abierto, setAbierto] = useState<boolean>(false);
    const respRef: any = useRef(null);
    const caretRef: any = useRef(null);

    const onToggleCaret = () => {
        setAbierto(!abierto)
        const respElement = respRef.current;
        const caretlement = caretRef.current;
        respElement.classList.toggle('hidden');
        caretlement.classList.toggle('rotate-180');
    }

    return (
        <div className='w-full tablet:w-3/4 p-4 px-6 border rounded-lg text-sm margin-auto my-4 shadow-md cursor-pointer'>
            <div className='flex justify-between items-center' onClick={onToggleCaret}>
                <p className='font-bold'>{data.pregunta}</p>
                <button ref={caretRef}
                style={{transitionProperty: "transform", transitionDuration: "300ms", transitionTimingFunction: "ease-in-out"}}>
                    <PiCaretDownBold size={"18px"}/>
                </button>
            </div>
            <p ref={respRef} className='mt-6 hidden duration-300'>{data.respuesta}</p>
        </div>
    )
}
