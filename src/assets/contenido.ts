import { DataNosotrosInterface, PreguntaFrecuenteInterface, SucursalInterface, TestimonioInterface } from "@/interfaces";

export const SUCURSALES: SucursalInterface[] = [
    {
        nombre: "Megacentro",
        ubicacion: "Santo Domingo",
        horario: "De lunes a sábados de 9 AM a 8 PM. Domingos de 10 AM a 6 PM",
        telefono: "809-468-2011",
        descripcion: "2do Nivel"
    },
    {
        nombre: "Coral Mall",
        ubicacion: "Santo Domingo",
        horario: "De lunes a sábados de 9 AM a 7 PM.",
        telefono: "809-466-6089",
        descripcion: "1er Nivel"
    },
    {
        nombre: "Plaza Naco",
        ubicacion: "Santo Domingo",
        horario: "De lunes a sábados de 9 AM a 7 PM.",
        telefono: "809-793-6298",
        descripcion: "1er Nivel"
    },
    {
        nombre: "Plaza Central",
        ubicacion: "Santo Domingo",
        horario: "De lunes a sábados de 9 AM a 7 PM.",
        telefono: "809-806-0798",
        descripcion: "2do Nivel"
    },
    {
        nombre: "Plaza Duarte",
        horario: "De lunes a sábados de 9 AM a 7 PM. Domingos de 10 AM a 8 PM",
        telefono: "809-745-8139",
        descripcion: "Carrefour",
        ubicacion: "Santo Domingo"
    },
    {
        nombre: "Calle del Sol",
        ubicacion: "Santiago",
        horario: "De lunes a sábados de 9 AM a 7 PM.",
        telefono: "809-724-6146",
        descripcion: "No. 42"
    },
    {
        nombre: "Colinas Mall",
        ubicacion: "Santiago",
        horario: "De lunes a sábados de 9 AM a 7 PM.",
        telefono: "809-570-4689",
        descripcion: "1er Nivel"
    },
    {
        nombre: "Plaza Haché",
        ubicacion: "Santiago",
        horario: "De lunes a sábados de 9 AM a 6 PM.",
        telefono: "809-971-5633",
        descripcion: ""
    },
    {
        nombre: "Camino real",
        ubicacion: "Puerto Plata",
        horario: "De lunes a sábados de 9 AM a 6:30 PM.",
        telefono: "809-261-7386",
        descripcion: ""
    },
    {
        nombre: "Plaza Juan Brugal",
        ubicacion: "Puerto Plata",
        horario: "De lunes a sábados de 9 AM a 6:30 PM.",
        telefono: "809-261-2636",
        descripcion: ""
    },
    {
        nombre: "Plaza Mazur",
        ubicacion: "Sosua",
        horario: "De lunes a sábados de 9 AM a 3:30 PM.",
        telefono: "809-571-4900",
        descripcion: ""
    },
    {
        nombre: "Plaza Ocean One",
        ubicacion: "Cabarete",
        horario: "De lunes a sábados de 9 AM a 6:30 PM.",
        telefono: "809-571-0057",
        descripcion: ""
    }
]

export const DATA_SOBRE_NOSOTROS: DataNosotrosInterface[] = [
    {
        titulo: "Nuestro Equipo",
        descripcion: `Mun2 está conformado por apasionados de la moda, comprometidos en brindarte la mejor experiencia de compra. 
        Cada miembro de nuestro 
        equipo comparte la misma visión: hacer que la moda sostenible y asequible sea una realidad para todos.`,
        imagen: require("../assets/nosotros/1.jpeg")
    },
    {
        titulo: "Nuestro Equipo",
        descripcion: `Seleccionamos, clasificamos y enviamos a cada tienda nuestros productos semanalmente, para que nuestro 
        amable equipo de atención al cliente se asegure que encuentres las mejores y más reconocidas marcas de indumentaria 
        del mundo, siempre en perfecto estado y con precios increíbles.`,
        imagen: require("../assets/nosotros/2.jpeg")
    },
    {
        titulo: "Nuestro Equipo",
        descripcion: `Estamos orgullosos de ser la primera tienda en República Dominicana que, a través de la 
        sostenibilidad y la promoción de la reutilización de prendas, contribuye tanto a la sociedad mediante nuestros precios
         bajos,
         como al medio ambiente y al planeta.`,
        imagen: require("../assets/nosotros/3.jpeg")
    }
]

export const TESTIMONIOS: TestimonioInterface[] = [
    {
        usuario: "Ines Reyes Morel",
        calificacion: 4,
        imagenURL: "https://bright.tailwindawesome.com/_next/image?url=%2Fimages%2Fstock%2Ftestimonials%2Ftestimonial-01.jpg&w=96&q=75",
        texto: `"Tengo dos pares de zapatos que los compré aquí en Santiago, uno tiene dos años y otro uno y están como nuevos, 
        he adquirido tres carteras de gran calidad que todos admiran, y la ropa ni hablar: hermosa y elegante."`
    },
    {
        usuario: "Jazmín Martinez",
        imagenURL: "https://bright.tailwindawesome.com/_next/image?url=%2Fimages%2Fstock%2Ftestimonials%2Ftestimonial-03.jpg&w=96&q=75",
        calificacion: 5,
        texto: `"Me fascinan los vestidos, y en Mun2 encuentro desde RD $100 en adelante para toda ocasión, bellos, a mi talla y cómodos."`
    },
    {
        usuario: "Julieta",
        imagenURL: "https://bright.tailwindawesome.com/_next/image?url=%2Fimages%2Fstock%2Ftestimonials%2Ftestimonial-04.jpg&w=256&q=75",
        calificacion: 5,
        texto: `"Antes de yo conocer sus tiendas, yo dudaba de la calidad de la ropa por malas experiencias que he tenido en otras
        tiendas. Pero desde que Mun2 esta en Megacentro 
        se volvió mi tienda favorita y la calidad es buenisima! Ahora visto de marca sin gastar mucho.."`
    },
   
]
//¿
export const PREGUNTAS_FRECUENTES: PreguntaFrecuenteInterface[] = [
    {
        pregunta: "¿Puedo vender mi ropa?",
        respuesta: `No compramos ropa, solo vendemos.`
    },
    {
        pregunta: "¿Venden ropa usada?",
        respuesta: `Nuestra mercancía es ropa de segunda mano seleccionada y ropa nueva, con etiqueta, de las mejores marcas del mundo.`
    },
    {
        pregunta: "¿Puedo conocer el stock antes de ir a la tienda?",
        respuesta: `La mercancía en MUN2 es exclusiva, son artículos únicos en su mayoría. No podemos confirmar el stock con anticipación ya que podría no estar disponible cuando visites la tienda.`
    },
    {
        pregunta: "¿Reciben pagos con tarjeta?",
        respuesta: `Trabajamos con efectivo en todas nuestras sucursales, pero además, recibimos tarjetas en:
        📍Plaza central (Sto. Domingo) \n 📍Plaza Duarte (Sto. Domingo \n 📍Megacentro (Sto. Domingo) \n
        📍Camino real (Pto. Plata) \n 📍Plaza Juan Brugal (Pto. Plata)`
    },
    {
        pregunta: "¿Cuándo reciben mercancía? ",
        respuesta: `Cada tienda recibe mercancía una vez en la semana, no hay un día específico.`
    },
    {
        pregunta: "¿Se pueden hacer cambios o devoluciones?",
        respuesta: `No realizamos cambios ni devoluciones. Para cualquier inconveniente puedes comunicarte telefónicamente al 809-571-0324 o por correo a  Mun2onlinerd@gmail.com.`
    },
    {
        pregunta: "¿Abren los domingos?",
        respuesta: `Sólo abrimos los domingos en Plaza Duarte Carrefour desde las 10 am a 8 pm, en Megacentro de 10 am a 6 pm y en Plaza Central de 10 am a 4pm (Santo Domingo).`
    }
] 