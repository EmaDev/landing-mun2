import Link from 'next/link';
import React from 'react';
import { MdEmail, MdPhone } from "react-icons/md";

export const Footer = () => {
    return (
        <footer className='py-10 px-4  bg-red-400 w-full flex flex-col items-center justify-center text-white'>
            <div className='tablet:grid grid-cols-2 items-center justify-items-center gap-10 text-white w-3/4'>
                <div className='hidden tablet:inline-block tablet:w-fit tablet:justify-self-start'>
                    <p className='font-bold text-xl'>Secciones</p>
                    <ul className=''>
                        <li className='my-4'>Nosotros</li>
                        <li className='my-4'>Contacto</li>
                        <li className='my-4'>Sucursales</li>
                        <li className='my-4'>Novedades</li>
                    </ul>
                </div>
                <div className='w-fit justify-self-end'>
                    <p className='font-bold text-xl'>Contactanos</p>
                    <ul className=''>
                        <li className='flex justify-center gap-8 items-center my-4'>
                            <p className='p-2 bg-orange-400 rounded-lg w-fit'>
                                <MdEmail size="20px" color="#fff" />
                            </p>
                            <div className=''>
                                <span className='font-bold'>Email</span>
                                <br />
                                <Link href={"#"} className='text-md'>bapp@gmail.com</Link>
                            </div>
                        </li>
                        <li className='flex justify-center gap-8 items-center my-4'>
                            <p className='p-2 bg-green-600 rounded-lg w-fit'>
                                <MdPhone size="20px" color="#fff" />
                            </p>
                            <div className=''>
                                <span className='font-bold'>Telefono</span>
                                <br />
                                <Link href={"#"} className='text-md'>bapp@gmail.com</Link>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div className='w-3/4 h-[1px] bg-[rgba(255,255,255,0.5)] my-8'></div>

            <div className='w-3/4 tablet:flex justify-center tablet:justify-between text-center'>
                <span>© 2023 todos los derechos reservados</span>
                <br/>
                <span className='mt-8 tablet:mt-0 flex text-center'>Desarrollado por 
                <Link className='font-bold ml-1' href={"https://www.instagram.com/bapp.estudio/"}> Bapp Estudio</Link></span>
            </div>
        </footer>
    )
}
