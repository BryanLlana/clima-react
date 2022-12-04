import useClima from "../hooks/useClima"
import Formulario from "./Formulario"
import Resultado from "./Resultado"
import Spinner from './Spinner'

const AppClima = () => {
    const {cargando, resultado, noResultado} = useClima();
    return (
        <main className="dos-columnas">
            <Formulario />
            {cargando ? <Spinner /> : resultado?.temp ? <Resultado /> : noResultado ? <p>No hay Resultado</p> : <p>El clima se mostrará aqui</p>}
        </main>
    )
}

export default AppClima