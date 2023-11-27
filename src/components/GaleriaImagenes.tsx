import Image from 'next/image';
import React from 'react';
import styles from "../components/GaleriaImagenes.module.css";

export const GaleriaImagenes = () => {
    return (
        <div className={styles.container}>
            <div className='heading'>
            </div>

            <div className={styles.box}>
                <div className={styles.dream}>
                    {
                        [1, 2, 7, 8,].map(item => (
                            <Image alt="img" src={require(`../assets/galeria/${item}.jpg`)}
                                
                            />
                        ))
                    }
                </div>
                

            </div>
        </div>
    )
}
