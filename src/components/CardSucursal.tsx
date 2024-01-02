"use client";
import { useRef, useState } from 'react';
import { ItemSucursalIntreface, SucursalInterface } from '@/interfaces';
import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from "react-icons/fa";
import { PiCaretDownBold } from 'react-icons/pi';

interface Props {
    data: SucursalInterface;
}

export const CardSucursal = ({ data }: Props) => {

    const respRef: any = useRef(null);
    const caretRef: any = useRef(null);

    const onToggleCaret = () => {
        const respElement = respRef.current;
        const caretlement = caretRef.current;
        respElement.classList.toggle('hidden');
        caretlement.classList.toggle('rotate-180');
    }

    return (
        <div className='w-full tablet:w-3/4 p-4 px-6 border rounded-lg text-sm margin-auto my-4 shadow-md cursor-pointer'>
            <div onClick={onToggleCaret} className='flex justify-between items-center'>
                <div></div>
                <p className='font-bold mr-6 text-center text-xl'>{data.nombre}</p>
                <button ref={caretRef}
                    style={{ transitionProperty: "transform", transitionDuration: "300ms", transitionTimingFunction: "ease-in-out" }}>
                    <PiCaretDownBold size={"22px"} />
                </button>
            </div>
            <div className='hidden transition duration-500 ease-in-out' ref={respRef}>
                    <div className='mt-2 pt-4 border-t-2 tablet:grid grid-cols-2 laptop:grid-cols-3 gap-6 justify-items-center'>
                        {
                            data.sucursales.map(suc => (
                                <ItemSucursal data={suc} />
                            ))
                        }
                    </div>
            </div>
        </div>
    )
}

interface PropsChild {
    data: ItemSucursalIntreface;
}

const ItemSucursal = ({ data }: PropsChild) => {
    return (
        <div className='rounded-md shadow-md bg-white border tablet:max-w-[350px] mb-4 tablet:mt-2'>
            <div className='bg-red-600 rounded-t-md p-2 text-white flex justify-center items-center gap-2'>
                <FaMapMarkerAlt />
                <h3 className='text-lg'>{data.nombre}</h3>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "10% 90%" }} className='p-3 w-full gap-1'>
                <FaClock />
                <span className='text-xs tablet:text-sm'>{data.horario}</span>
                <FaPhoneAlt />
                <span className='text-xs tablet:text-sm'>{data.telefono}</span>
                <FaMapMarkerAlt />
                <span className='text-xs tablet:text-sm'>{data.descripcion}</span>
            </div>
        </div>
    )
}