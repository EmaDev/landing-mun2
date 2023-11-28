import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaClock  } from "react-icons/fa";

export const CardSucursal = () => {
    return (
        <div className='rounded-md shadow-md bg-white border '>
            <div className='bg-red-400 rounded-t-md p-2 text-white flex justify-center items-center gap-2'>
                <FaMapMarkerAlt />
                <h3 className=''>Plaza central</h3>
            </div>
            <p className='my-1 text-sm text-slate-400'>Santo Domingo</p>
            <div className='p-3 font-mono'>
                <p className='mb-4 text-sm flex justify-around  items-center'>
                    <FaClock  />
                    <span className='text-xs tablet:text-sm'>Lunes a sabados de 9 AM a 7 PM</span>
                </p>
                <div className='desktop:mt-6 grid desktop:grid-cols-2'>
                    <p className='mb-4 desktop:mb-0 text-sm flex items-center'>
                        <FaPhoneAlt className="mr-4"/>
                        <span>809-806-0798</span>
                    </p>
                    <p className='text-sm flex items-center'>
                        <FaMapMarkerAlt className="mr-4"/>
                        <span>2 Nivel</span>
                    </p>
                </div>
            </div>
        </div>
    )
}
