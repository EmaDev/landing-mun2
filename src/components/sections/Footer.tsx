import Link from 'next/link';
import React from 'react';
import { MdEmail, MdPhone } from "react-icons/md";

export const Footer = () => {

    const calcularAnioActual = ():number => {
        const fecha = new Date;
        return fecha.getFullYear();
    }
    return (
        <footer id="contacto" className='py-10 px-4  bg-red-400 w-full flex flex-col items-center justify-center text-white'>
            <div className='tablet:grid grid-cols-2 items-center justify-items-center gap-10 text-white w-3/4'>
                <div className='hidden tablet:inline-block tablet:w-fit tablet:justify-self-start'>
                    <p className='font-bold text-xl'>Secciones</p>
                    <ul className=''>
                        <li className='my-4'>
                            <Link className='hover:text-red-300' href={"#nosotros"}>Nosotros</Link>
                        </li>
                        <li className='my-4'>
                            <Link className='hover:text-red-300' href={"#sucursales"}>Sucursales</Link>
                        </li>
                        <li className='my-4'>
                            <Link className='hover:text-red-300' href={"#novedades"}>Novedades</Link>
                        </li>
                        <li className='my-4'>
                            <Link className='hover:text-red-300' href={"#preguntas"}>Preguntas frecuentes</Link>
                        </li>
                    </ul>
                </div>
                <div className='w-fit justify-self-end'>
                    <p className='font-bold text-xl'>Contactanos</p>
                    <ul className=''>
                        <li className='flex gap-4 items-center my-4 '>
                            <p className='p-2 bg-orange-400 rounded-lg w-fit'>
                                <MdEmail size="20px" color="#fff" />
                            </p>
                            <div className=''>
                                <span className='font-bold'>Email</span>
                                <br />
                                <Link href={"#"} className='text-md'>Mun2onlinerd@gmail.com</Link>
                            </div>
                        </li>
                        <li className='flex gap-4 items-center my-4'>
                            <p className='p-2 bg-green-600 rounded-lg w-fit'>
                                <MdPhone size="20px" color="#fff" />
                            </p>
                            <div className=''>
                                <span className='font-bold'>Telefono</span>
                                <br />
                                <Link href={"#"} className='text-md'>809-571-0324</Link>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div className='w-3/4 h-[1px] bg-[rgba(255,255,255,0.5)] my-8'></div>

            <div className='w-3/4 tablet:flex justify-center tablet:justify-between text-center'>
                <span>© {calcularAnioActual()} todos los derechos reservados</span>
                <span className='mt-8 tablet:mt-0 flex justify-center'>Desarrollado por
                <Link className='font-bold ml-1 w-fit' href={"https://www.instagram.com/bapp.estudio/"}> Bapp Estudio</Link></span>
            </div>
        </footer>
    )
}
/*
  <span className='mt-8 tablet:mt-0 flex text-center bg-orange-500'>Desarrollado por
                    <Link className='font-bold ml-1 w-fit' href={"https://www.instagram.com/bapp.estudio/"}> Bapp Estudio</Link></span>
            </div>
*/
