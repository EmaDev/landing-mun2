"use client"

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { MdMenu, MdOutlineClose } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import Image from 'next/image';

export const NavBar = () => {

    const [navAbierto, setNavAbierto] = useState<boolean>(false);
    const [navHidden, setNavHidden] = useState<boolean>(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    const navRef: any = useRef(null);
    const bgRef: any = useRef(null);

    useEffect(() => {
       
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY) {
                setNavHidden(true);
            } else {
                setNavHidden(false);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };

    }, [lastScrollY]);


    const onToggleMenu = () => {
        const navElement = navRef.current;
        const bgElement = bgRef.current;
        navElement.classList.toggle('top-[50px]');
        bgElement.classList.toggle('hidden');
        setNavAbierto(!navAbierto);
    }

    return (
        <div className={`z-[90] py-[0.6rem] laptop:py-2 w-full fixed bg-red-400 border-b-[1px] border-red-500 shadow-md text-white duration-300
        ${ navHidden && "py-0"}`}
        >

            <div ref={bgRef} onClick={onToggleMenu} className='hidden laptop:hidden absolute bg-[rgba(0,0,0,0.4)] w-full h-[100vh] top-[50px]'></div>
            <nav className='flex justify-between items-center w-[92%] mx-auto'>

                <div className='w-[80px] tablet:w-[100px]'>
                    <Image alt="logo MUN2" src={require("../assets/logo.svg")} />
                </div>

                <div className='flex justify-center items-center gap-12'>
                    <div ref={navRef} className='flex absolute laptop:w-auto laptop:static min-h-[70vh] 
                          laptop:min-h-fit laptop:shadow-none
                          right-0 z-[80] top-[-100vh] duration-200 w-full rounded-bl-full laptop:rounded-none'>
                        <ul className='flex flex-col laptop:flex-row gap-[4vw] items-end w-full 
                            px-12 pt-20 laptop:p-0 bg-red-400 rounded-bl-full shadow-lg laptop:shadow-none'>
                                <li className={`duration-300 ${navHidden ? "text-md" : "text-lg"}`} onClick={onToggleMenu}>
                                <Link className='hover:text-red-300' href={"#novedades"}>Novedades</Link>
                            </li>
                            <li className={`duration-300 ${navHidden ? "text-md" : "text-lg"}`} onClick={onToggleMenu}>
                                <Link className='hover:text-red-300' href={"#nosotros"}>Sobre Nosotros</Link>
                            </li>
                            <li className={`duration-300 ${navHidden ? "text-md" : "text-lg"}`} onClick={onToggleMenu}>
                                <Link className='hover:text-red-300' href={"#sucursales"}>Sucursales</Link>
                            </li>
                            <li className={`duration-300 ${navHidden ? "text-md" : "text-lg"}`} onClick={onToggleMenu}>
                                <Link className='hover:text-red-300' href={"#preguntas"}>Preguntas frecuentes</Link>
                            </li>
                            <li className={`duration-300 ${navHidden ? "text-md" : "text-lg"}`} onClick={onToggleMenu}>
                                <Link className='hover:text-red-300' href={"#"}>Contacto</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='flex justify-center items-center gap-4'>
                        <Link className={`${navHidden ? "text-2xl" : "text-3xl"} duration-300`} href={"https://www.instagram.com/mun2online/"} target={"_blank"}>
                            <FaInstagram/>
                        </Link>
                        <button className={`laptop:hidden ${navHidden ? "text-3xl" : "text-4xl"} duration-300`} onClick={onToggleMenu}>
                            {navAbierto ?
                                <MdOutlineClose />
                                :
                                <MdMenu />
                            }

                        </button>
                    </div>
                </div>
            </nav>
        </div>
    )
}