import { CardSucursal } from '@/components/CardSucursal';
import { Header } from '@/components/Header';
import { NavBar } from '@/components/NavBar';
import styles from "../components/sections/Sucursales.module.css";
import { CardSobreNosotros } from '@/components/CardSobreNosotros';
import { CardOpinion } from '@/components/CardOpinion';
import { ItemPregunta } from '@/components/ItemPregunta';
import { Footer } from '@/components/sections/Footer';
import { DATA_SOBRE_NOSOTROS, PREGUNTAS_FRECUENTES, SUCURSALES, TESTIMONIOS } from '@/assets/contenido';
import { GaleriaImagenes } from '@/components/GaleriaImagenes';
import { Paginador } from '@/components/Paginador';
import { Novedades } from '@/components/sections/Novedades';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between text-black">
      <NavBar />
      {/*<div className='w-full bg-green-400 tablet:bg-orange-400 laptop:bg-blue-400 desktop:bg-red-400'>
        <h1>Calculador de dimensiones</h1>
       </div>*/}
      <Header />

      <Novedades/>

      <section id="nosotros" className='min-h-[100vh] w-4/5 tablet:w-full laptop:w-3/4 
      flex flex-col items-center justify-items-center tablet:p-20 relative'>
        <img alt="" src='https://bright.tailwindawesome.com/_next/static/media/curved-dotted-line.38bf1b54.svg'
          className='hidden tablet:flex absolute right-0 left-0 m-auto z-10'
          style={{ filter: "saturate(1000%) brightness(100%) hue-rotate(50deg)" }} />
        <img alt="" src='https://bright.tailwindawesome.com/_next/static/media/looped-dotted-line.0214bb0b.svg'
          className='hidden tablet:flex absolute right-0 left-0 bottom-40 m-auto z-10'
          style={{ filter: "saturate(1000%) brightness(100%) hue-rotate(50deg)" }} />

        <div className='text-left w-full'>
          <h3 className='text-3xl laptop:text-5xl font-bold font-Poppins max-w-[550px] mb-6'>Sobre nosotros</h3>
          <p className='max-w-[450px] text-lg'>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
            Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.</p>
        </div>
        <div className='grid tablet:grid-cols-2 gap-10 mt-10 laptop:w-3/4 relative z-20'>
          {DATA_SOBRE_NOSOTROS.map((item, i) => (
            <CardSobreNosotros key={item.titulo + i + "-nosotros"}
              classes={(i == 1) ? "tablet:mt-[-75px]" : ""}
              data={item} />
          ))}
        </div>
      </section>
      <div className='w-4/5 h-[2px] bg-[rgba(0,0,0,0.1)]'></div>
      <section id="sucursales" className={`min-h-[80vh] w-full flex items-center justify-center 
      ${styles.banner} my-10 tablet:my-0 laptop:pb-10`}>
        <div className={`mt-4 p-4 desktop:w-3/4 flex flex-col items-center justify-center`}>
          <h2 className='text-3xl tablet:text-4xl laptop:text-5xl font-bold font-Poppins text-center'>Conoce Nuestras Sucursales</h2>
          <div className='flex text-xs tablet:text-lg mt-6 font-bold font-mono'>
            <h4 className='text-center'>
              {"Santo Domingo > Santiago > Puerto Plata > Cabarete > Sosua"}
            </h4>
          </div>
          <div className='mt-10 grid grid-cols-2 gap-3 tablet:grid-cols-3 
        desktop:grid-cols-4 tablet:gap-10 text-center flex justify-center'>
            {SUCURSALES.map((suc, i) =>
              <CardSucursal key={i + "-" + suc.nombre} data={suc} />
            )}
          </div>
        </div>
      </section>

      <section className='min-h-[80vh] w-full bg-gradient-to-r from-red-300 to-red-400 flex justify-center items-center'>
        <div className='my-20 tablet:w-3/4 flex flex-col justify-center items-center overflow-hidden'>
          <h3 className='mx-10 text-center font-Poppins font-bold text-5xl text-white mb-6'>Testimonio de clientes</h3>
          <p className='mx-6 text-center font-Poppins font-medium text-xl text-white teblet:max-w-[600px]'>Que opinan nuestros sobre nosotros.</p>

          <div className='mt-14 py-6 px-8 flex max-w-[100%] gap-8 overflow-auto'>
            {TESTIMONIOS.map(item => (
              <CardOpinion key={item.usuario + "-opinion"} data={item} />
            ))}
          </div>
        </div>
      </section>

      <section id="preguntas" className='min-h-[80vh] my-20 px-8 w-full tablet:w-3/4 justify-center items-center'>
        <h2 className='font-Poppins font-bold text-4xl mb-6'>Preguntas frecuentes</h2>
        <p>Vestibulum ac diam sit amet quam vehicula elementum sed
          sit amet dui. Curabitur arcu erat, accumsan id imperdiet et.</p>

        <div className='mt-8 flex flex-col margin-auto justify-center items-center'>
          {
            PREGUNTAS_FRECUENTES.map((preg, i) => (
              <ItemPregunta key={i + "-pregunta"} data={preg} />
            ))
          }
        </div>
      </section>
      <Footer />
    </main>
  )
}
