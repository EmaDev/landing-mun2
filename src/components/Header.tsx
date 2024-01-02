import Image from 'next/image'
import React from 'react'
import styles from "../components/Header.module.css";

export const Header = () => {
  return (
    <header className={`text-white w-full h-[95vh] laptop:h-screen bg-gradient-to-r from-red-600 to-red-700 relative overflow-hidden ${styles.header}`}>
      <div className={`w-full h-full grid grid-rows-5 tablet:grid-rows-1 tablet:grid-cols-3`}>

        <div className='row-span-2 laptop:row-span-1 tablet:col-span-2 flex flex-col items-center justify-center relative mx-6'>

          <div className='text-left font-black absolute tablet:static bottom-[-10%] z-[80]'>
            <div className={`p-2 tablet:p-4 bg-[#c10027] w-[140px] tablet:w-[180px] mb-4 teblet:mb-8 rounded-md flex justify-center ${styles.pequeno}`}>
              <Image alt="logo Mun2" src={require("../assets/logo.svg")}
                className='w-[80%] tablet:w-[100%]'/>
            </div>
            <p className='text-4xl tablet:text-6xl laptop:text-7xl desktop:text-8xl font-Poppins'>Encuentra todo</p>
            <p className='text-4xl tablet:text-6xl laptop:text-7xl desktop:text-8xl mb-6 font-Poppins'>lo que <span className='text-yellow-200'>deseas</span></p>
            <p className='font-medium text-sm tablet:text-xl laptop:text-2xl desktop:text-3xl font-Poppins'>Ropa de segunda mano, Electrodomésticos, Juguetes,</p>
            <p className='font-medium text-sm tablet:text-xl laptop:text-2xl desktop:text-3xl font-Poppins text-yellow-200'>y mucho más</p>
          </div>

        </div>

        <div className='row-span-3 tablet:col-span-1 relative'>
          
          <div className='absolute w-[490px] h-[490px] bg-red-700 rounded-full bottom-[-15%] 
          right-[-150px] z-0 border-4 border-red-800 tablet:hidden'></div>
         
          <div className='absolute tablet:w-[650px] tablet:h-[650px] laptop:w-[900px] laptop:h-[900px] bg-red-700 rounded-full 
               bottom-[-10%] right-[-15%] laptop:right-[-250px] laptop:top-[-50px] border-8 border-red-800'></div>

          <div className='absolute bottom-0 -right-20 w-[110%] tablet:w-[600px] laptop:w-[800px] desktop:w-[900px]'>
            <Image src={require("../assets/familia2.png")} alt="familia"
              style={{ width: "100%" }} />
          </div>
        </div>

      </div>
    </header>
  )
}