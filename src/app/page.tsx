import { CardSucursal } from '@/components/CardSucursal';
import { GaleriaImagenes } from '@/components/GaleriaImagenes';
import { Header } from '@/components/Header';
import { IoMdCart } from "react-icons/io";
import { FiCheck } from "react-icons/fi";
import { CardDoble } from '@/components/CardDoble';
import { RiArrowDropRightLine } from "react-icons/ri";
import { NavBar } from '@/components/NavBar';
import styles from "../components/sections/Sucursales.module.css";
import { CardSobreNosotros } from '@/components/CardSobreNosotros';
import { CardOpinion } from '@/components/CardOpinion';
import { ItemPregunta } from '@/components/ItemPregunta';
import { Footer } from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between text-black scroll-smooth">
      <NavBar />
      {/*<div className='w-full bg-green-400 tablet:bg-orange-400 laptop:bg-blue-400 desktop:bg-red-400'>
        <h1>Calculador de dimensiones</h1>
       </div>*/}
      <Header />

      <section className='m-6 min-h-[90vh] tablet:grid tablet:grid-cols-2 tablet:gap-40 items-center'>
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
          <CardDoble image1={require("../assets/plaza-central/1.jpeg")} image2={require("../assets/plaza-central/2.jpeg")} />
          <CardDoble image1={require("../assets/plaza-central/3.jpeg")} image2={require("../assets/plaza-central/4.jpeg")} />
        </div>
      </section>

      <section className='min-h-[100vh] w-3/4 tablet:w-full laptop:w-3/4 flex flex-col items-center justify-items-center tablet:p-20 relative'>
        <img alt="" src='https://bright.tailwindawesome.com/_next/static/media/curved-dotted-line.38bf1b54.svg'
          className='absolute right-0 left-0 m-auto z-10'
          style={{ filter: "saturate(1000%) brightness(100%) hue-rotate(0deg)" }} />
        <img alt="" src='https://bright.tailwindawesome.com/_next/static/media/looped-dotted-line.0214bb0b.svg'
          className='absolute right-0 left-0 bottom-40 m-auto z-10'
          style={{ filter: "hue-rotate(0deg) saturate(1000%) brightness(100%) contrast(100%)" }} />

        <div className='text-left w-full'>
          <h3 className='text-3xl font-bold font-Poppins max-w-[550px] mb-6'>Vestibulum ac diam sit amet quam vehicula</h3>
          <p className='max-w-[450px] text-lg'>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
            Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.</p>
        </div>
        <div className='grid tablet:grid-cols-2 gap-10 mt-10 laptop:w-3/4 relative z-20'>
          {[1, 2, 3].map(item => (
            <CardSobreNosotros key={item + "-nosotros"} classes={(item == 2) ? "tablet:mt-[-75px]" : ""} img={item} />
          ))}
        </div>
      </section>

      <section className={`min-h-[80vh] w-full flex items-center justify-center ${styles.banner} my-10 tablet:my-0`}>
        <div className={`mt-4 p-4 desktop:w-3/4 flex flex-col items-center justify-center`}>
          <h2 className='text-3xl tablet:text-4xl laptop:text-5xl font-bold font-Poppins text-center'>Conoce Nuestras Sucursales</h2>
          <div className='flex text-xs tablet:text-lg mt-6 font-bold font-mono'>
            <h4 className='flex items-center'>
              <span>Santo Domingo</span>
              <RiArrowDropRightLine />
            </h4>
            <h4 className='flex items-center'>
              <span>Satiago</span>
              <RiArrowDropRightLine />
            </h4>
            <h4 className='flex items-center'>
              <span>Cabarete</span>
              <RiArrowDropRightLine />
            </h4>
            <h4 className='flex items-center'>
              <span>Puerto Plata</span>
              <RiArrowDropRightLine />
            </h4>
            <h4 className='flex items-center'>
              <span>Sosua</span>
            </h4>
          </div>
          <div className='mt-10 grid grid-cols-2 gap-3 tablet:grid-cols-3 
        desktop:grid-cols-4 tablet:gap-10 text-center flex justify-center'>
            <CardSucursal />
            <CardSucursal />
            <CardSucursal />
            <CardSucursal />
            <CardSucursal />
            <CardSucursal />
            <CardSucursal />
            <CardSucursal />
          </div>
        </div>
      </section>

      <section className='min-h-[80vh] w-full bg-gradient-to-r from-red-300 to-red-400 flex justify-center items-center'>
        <div className='my-20 tablet:w-3/4 flex flex-col justify-center items-center overflow-hidden'>
          <h3 className='mx-10 text-center font-Poppins font-bold text-5xl text-white mb-6'>Testimonio de clientes</h3>
          <p className='mx-6 text-center font-Poppins font-medium text-xl text-white teblet:max-w-[600px]'>Que opinan nuestros sobre nosotros.</p>
          
          <div className='mt-14 py-6 px-8 flex max-w-[100%] gap-8 overflow-auto'>
            {[0,1,2,3].map( item => (
              <CardOpinion key={item + "-opinion"} value={item}/>
            ))}
          </div>
        </div>
      </section>

      <section  className='min-h-[80vh] my-20 px-8 w-full tablet:w-3/4 justify-center items-center'>
        <h2 className='font-Poppins font-bold text-4xl mb-6'>Preguntas frecuentes</h2>
        <p>Vestibulum ac diam sit amet quam vehicula elementum sed 
          sit amet dui. Curabitur arcu erat, accumsan id imperdiet et.</p>

        <div className='mt-8 flex flex-col margin-auto justify-center items-center'>
          <ItemPregunta/>
          <ItemPregunta/>
          <ItemPregunta/>
          <ItemPregunta/>
          <ItemPregunta/>
          <ItemPregunta/>
        </div>
      </section>
      <Footer/>
    </main>
  )
}
