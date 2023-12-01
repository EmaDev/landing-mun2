import { SucursalInterface } from '@/interfaces';
import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from "react-icons/fa";

interface Props {
    data: SucursalInterface;
}
export const CardSucursal = ({ data }: Props) => {
    return (
        <div className='rounded-md shadow-md bg-white border '>
            <div className='bg-red-400 rounded-t-md p-2 text-white flex justify-center items-center gap-2'>
                <FaMapMarkerAlt />
                <h3 className=''>{data.nombre}</h3>
            </div>
            <p className='my-1 text-sm text-slate-400'>{data.ubicacion}</p>
            <div style={{ display: "grid", gridTemplateColumns: "10% 90%" }} className='p-3 font-mono w-full'>
                <FaClock />
                <span className='text-xs tablet:text-sm'>Lunes a sabados de 9 AM a 7 PM</span>
                <FaPhoneAlt/>
                <span>809-806-0798</span>
                <FaMapMarkerAlt/>
                <span>2 Nivel</span>
            </div>
        </div>
    )
}