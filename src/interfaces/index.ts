export interface SucursalInterface {
    nombre: string,
    ubicacion: string,
    horario: string,
    telefono: string,
    descripcion: string
}


export interface DataNosotrosInterface {
    titulo: string;
    descripcion: string;
    imagen: any;
} 

export interface TestimonioInterface {
    usuario: string;
    imagenURL: string;
    calificacion: number;
    texto: string;
}

export interface PreguntaFrecuenteInterface {
    pregunta: string;
    respuesta: string;
}