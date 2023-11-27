"use client"

import React, { useRef, useState } from 'react';
import Link from 'next/link';
import { MdMenu, MdOutlineClose } from "react-icons/md";
import { Button } from './Button';
import Image from 'next/image';

export const NavBar = () => {

    const [navAbierto, setNavAbierto] = useState<boolean>(false);

    const navRef: any = useRef(null);
    const bgRef:any = useRef(null);

    const onToggleMenu = () => {
        const navElement = navRef.current;
        const bgElement = bgRef.current;
        navElement.classList.toggle('top-[40px]');
        bgElement.classList.toggle('hidden');
        setNavAbierto(!navAbierto);
    }

    return (
        <div className="z-[999] w-full py-2 tablet:py-4 fixed bg-red-400 border-b-[1px] border-red-500 shadow-md text-white">

            <div ref={bgRef} onClick={onToggleMenu} className='hidden absolute bg-[rgba(0,0,0,0.4)] w-full h-[100vh] top-[50px]'></div>
            <nav className='flex justify-between items-center w-[92%] mx-auto'>
                
                <div className='w-[80px] tablet:w-[100px]'>
                    <Image alt="logo MUN2" src={require("../assets/logo.svg")} />
                </div>

                <div ref={navRef} className='flex absolute laptop:w-auto laptop:static min-h-[100vh] 
                 laptop:min-h-fit laptop:shadow-none
                 left-0 top-[-100vh] duration-300 w-full rounded-bl-full laptop:rounded-none'>
                    <ul className='flex flex-col laptop:flex-row gap-[4vw] items-end w-full 
                    px-12 pt-20 laptop:p-0 bg-red-400 rounded-bl-full shadow-lg laptop:shadow-none'>
                        <li className='text-lg'>
                            <Link className='hover:text-red-300' href={"#"}>Nosotros</Link>
                        </li>
                        <li className='text-lg'>
                            <Link className='hover:text-red-300' href={"#"}>Contacto</Link>
                        </li>
                        <li className='text-lg'>
                            <Link className='hover:text-red-300' href={"#"}>Sucursales</Link>
                        </li>
                        <li className='text-lg'>
                            <Link className='hover:text-red-300' href={"#"}>Novedades</Link>
                        </li>
                    </ul>
                </div>
                <button className='laptop:hidden' onClick={onToggleMenu}>
                    {navAbierto ?
                        <MdOutlineClose size="2rem"/>
                        :
                        <MdMenu size="2rem"/>
                    }

                </button>
            </nav>
        </div>
    )
}