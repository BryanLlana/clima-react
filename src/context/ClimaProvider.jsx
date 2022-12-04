import axios from "axios";
import { createContext, useState } from "react";

export const ClimaContext = createContext();

const ClimaProvider = ({children}) => {
    const [datos, setDatos] = useState({
        ciudad: '',
        pais: ''
    })
    const [resultado, setResultado] = useState({});
    const [cargando, setCargando] = useState(false);
    const [noResultado, setNoResultado] = useState(false);

    const handleChange = e => {
        setDatos({
            ...datos,
            [e.target.name]: e.target.value
        })
    }

    const obtenerClima = async() => {
        setResultado({});
        try {
            setCargando(true);
            setNoResultado(false);
            const {data: {coord: {lat, lon}}} = await axios(`https://api.openweathermap.org/data/2.5/weather?q=${datos.ciudad},${datos.pais}&appid=${import.meta.env.VITE_API_KEY}`)
            
            const {data: {main: {temp, temp_max, temp_min}}} = await axios(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${import.meta.env.VITE_API_KEY}`) 
    
            setResultado({
                temp: parseInt(temp - 273.15),
                max: parseInt(temp_max - 273.15),
                min: parseInt(temp_min - 273.15)
            })
        } catch (error) {
            console.log(error);
            setNoResultado(true);
        } finally {
            setCargando(false);
        }
    }

    return (
        <ClimaContext.Provider value={{
            datos, 
            handleChange,
            obtenerClima,
            resultado,
            cargando,
            noResultado
        }}>
            {children}
        </ClimaContext.Provider>
    )
}

export default ClimaProvider;