import Image from 'next/image';
import React from 'react';
import styles from "../components/GaleriaImagenes.module.css";

const arrImages = [
    require("../assets/slider/Sales Season 0.jpg"),
    require("../assets/slider/Sales Season C 1.jpg"),
    require("../assets/slider/Sales Season 2.jpg"),
    require("../assets/slider/Sales Season 4.jpg"),
    require("../assets/slider/Sales Season C 2.jpg"),
    require("../assets/slider/Sales Season 3.jpg"),

    require("../assets/slider/Sales Season 5.jpg"),
    require("../assets/slider/Sales Season 1.jpg"),


    require("../assets/slider/Sales Season C 3.jpg"),
    require("../assets/slider/Sales Season 1.jpg"),
    require("../assets/slider/Sales Season 1.jpg"),
    require("../assets/slider/Sales Season 1.jpg"),



]
export const GaleriaImagenes = () => {
    return (
        <div className={`p-5 p-8 h-[75vh] laptop:h-[85vh] overflow-auto ${styles.custom_gradient}`}>
            <div className="columns-1 gap-5 columns-2 gap-8 tablet:columns-3 [&>img:not(:first-child)]:mt-8">
                {
                    arrImages.map((img, i) => (

                        <Image key={i} src={img} loading="lazy" alt="Sucursal Mun2"
                        className=" transition duration-300 transform hover:scale-105 shadow-lg" />

                    ))
                }
            </div>
        </div>
    )
}