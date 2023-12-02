"use client";

import React, { useState } from 'react';
import { IoMdCart } from "react-icons/io";
import { FiCheck } from "react-icons/fi";
import { CardDoble } from '@/components/CardDoble';
import { RiArrowDropRightLine } from "react-icons/ri";
import { GaleriaImagenes } from '../GaleriaImagenes';
import { Paginador } from '../Paginador';
import styles from "./Navedades.module.css";

const LENGTH_PAGINATOR:number = 2;
export const Novedades = () => {

    const [posicionIndicador, setPosicionIndicador] = useState<number>(1);

    const handlePaginar = (lado: "BACK"|"NEXT"|"NULL", posicion: number = 0) => {

        if (lado == "NULL") {
            setPosicionIndicador(posicion);
            return;
        }

        if(lado == "BACK" && posicionIndicador > 0){
            setPosicionIndicador( (prev) =>  prev - 1 );
        }else if(lado == "NEXT" && posicionIndicador < LENGTH_PAGINATOR - 1){
            setPosicionIndicador( (prev) => prev + 1 )
        }

    }
    return (
        <section id="novedades" className='min-h-[110vh] flex flex-col justify-center items-center relative py-12 laptop:py-20 mb-12'>
            {posicionIndicador == 0 && <RenderPrincipal/>}
            {posicionIndicador == 1 && <RenderSecundario/>}
            <Paginador action={handlePaginar} length={LENGTH_PAGINATOR} active={posicionIndicador}/>
            <div className='absolute -bottom-5 w-4/5 h-[2px] bg-[rgba(0,0,0,0.1)]'></div>
        </section>
    )
}


const RenderPrincipal = () => {
    return (
        <div className='m-6 laptop:h-[80vh] tablet:grid tablet:grid-cols-2 tablet:gap-40 items-center'>
            <div className='tablet:w-[350px] laptop:w-[550px]'>
                <button className='p-2 bg-red-400 rounded-full relative text-white
         shadow-lg text-xs -rotate-3 mb-6'>Un MUN2 de opciones</button>
                <h3 className='text-2xl desktop:text-4xl font-bold font-Poppins mb-8'>La tienda MUN2 en Plaza Central expandio sus espacios</h3>

                <p className='text-lg desktop:text-xl desktop:my-12'>Ahora podran encontrar un gran variedad de productos. Ademas de ropa y zapatos
                    como en todas nuestras sucursales, encontran mucho mas.
                </p>

                <ul className='mt-6 bg-orange-100 p-6 pt-10 desktop:py-16 rounded-md relative text-md desktop:text-xl'>
                    <span className='absolute left-5 -top-5 bg-blue-400 p-2 rounded-lg shadow-md'>
                        <IoMdCart size="22px" color="#fff" />
                    </span>
                    <li className='flex align-between items-center gap-4 mb-2'>
                        <FiCheck color="green" size="22px" />
                        <p>Electrodomesticos</p>
                    </li>
                    <li className='flex align-between items-center gap-4 mb-2'>
                        <FiCheck color="green" size="22px" />
                        <p>Juguetes</p>
                    </li>
                    <li className='flex align-between items-center gap-4 mb-2'>
                        <FiCheck color="green" size="22px" />
                        <p>Ropa de cama</p>
                    </li>
                    <li className='flex align-between items-center gap-4 mb-2'>
                        <FiCheck color="green" size="22px" />
                        <p>Articulos para el hogar</p>
                    </li>
                    <li className='flex align-between items-center gap-4 mb-2'>
                        <FiCheck color="green" size="22px" />
                        <p>Las mejores marcas en ropa y zapatosF</p>
                    </li>
                </ul>
            </div>

            <div>
                <CardDoble image1={require("../../assets/plaza-central/1.jpeg")} image2={require("../../assets/plaza-central/2.jpeg")} />
                <CardDoble image1={require("../../assets/plaza-central/3.jpeg")} image2={require("../../assets/plaza-central/4.jpeg")} />
            </div>
        </div>
    )
}

const RenderSecundario = () => {
    return (
        <div className='w-full laptop:w-3/4 h-3/4'>
            <div className='w-full px-8'>
                <button className='p-2 bg-red-400 rounded-full relative text-white
            shadow-lg text-xs -rotate-3 mb-6'>Un MUN2 de opciones</button>
                <h3 className='text-2xl desktop:text-xl font-bold font-Poppins mb-4'>
                    sunt iure architecto veritatis praesentium vero ea digsigmus
                </h3>
                <p className='text-lg desktop:text-xl desktop:mt-6'>Lorem architecto veritatis praesentium vero octus</p>
            </div>

            <div className={`w-full h-[75vh] laptop:h-[85vh] overflow-hidden relative bg-[rgba(0,0,0,0)]`} >
                <GaleriaImagenes />
            </div>
        </div>
    )
}
/*
::after{
    background:  linear-gradient(to top, rgba(10,16,63,1) 0%, rgba(10,16,63,0) 100%);
    content: '';
    height: 50px;
    position:absolute;
    width: 100%;
    bottom:0;
  }*/