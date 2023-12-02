
interface Personaje {
    nombre: string;
    edad: number;
    clave: string;
    rango?: string;
}
const usContext = ({ clave, nombre, edad, rango = 'Capitán' }: Personaje) => {


    return {
        nombre,
        edad,
        clave,
        rango
    }

}

// const { nombreClave, anios, latlng: { lat, lng } } = usContext(persona);

export {
    usContext
}



