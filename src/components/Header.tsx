import Image from 'next/image'
import React from 'react'
import styles from "../components/Header.module.css";

export const Header = () => {
  return (
    <header className={`text-white w-full h-screen bg-gradient-to-r from-red-400 to-red-500 relative overflow-hidden ${styles.header}`}>
      <div className='absolute laptop:w-[900px] laptop:h-[900px] bg-red-500 rounded-full 
      laptop:right-[-250px] laptop:top-[-50px] border-8 border-red-600 hidden laptop:flex'></div>
     
      <div className='absolute laptop:hidden w-[520px] h-[520px] tablet:w-[750px] tablet:h-[750px] bg-red-500 rounded-full
      bottom-[-90px] right-[-150px] z-0 border-4 border-red-600'></div>

      <div className='w-full h-full flex flex-col laptop:justify-center items-center pw-6 desktop:p-20
      my-10 z-10 relative
      '>
        <div className='grid laptop:grid-cols-2 laptop:gap-20 text-center mx-6 mt-14 tablet:mt-8'>
          <div className='w-full'>
            
            <div className='p-4 bg-red-500 w-[180px] mb-4 teblet:mb-8 rounded-md flex justify-center'>
              <Image alt="logo Mun2" src={require("../assets/logo.svg")}
                width={120} />
            </div>
            
            <div className='text-left font-black'>
              <p className='text-4xl tablet:text-6xl laptop:text-7xl desktop:text-8xl font-Poppins'>Encuentra todo</p>
              <p className='text-4xl tablet:text-6xl laptop:text-7xl desktop:text-8xl mb-6 font-Poppins'>lo que <span className='text-yellow-200'>deseas</span></p>
              <p className='font-medium text-sm tablet:text-xl laptop:text-2xl desktop:text-3xl font-Poppins'>Ropa de segunda mano, Electrodomesticos, Juguetes,</p>
              <p className='font-medium text-sm tablet:text-xl laptop:text-2xl desktop:text-3xl font-Poppins text-yellow-200'>y mucho mas</p>
            </div>

          </div>
          <div className='absolute bottom-0 -right-20 w-[500px] tablet:w-[750px] laptop:w-[800px] desktop:w-[900px]'>
            <Image src={require("../assets/familia2.png")} alt="familia"
            style={{width: "100%"}}/>
          </div>

        </div>
      </div>
    </header>
  )
}