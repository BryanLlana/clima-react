import useClima from "../hooks/useClima"

const Resultado = () => {
    const {datos: {ciudad}, resultado: {temp, max, min}} = useClima();

    return (
        <div className="contenedor">
            <p>La temperatura de {ciudad} es de:</p>
            <p>{temp} &#8451;</p>
            <div className="temperaturas">
                <p>Max: {max} &#8451;</p>
                <p>Min: {min} &#8451;</p>
            </div>
        </div>
    )
}

export default Resultado