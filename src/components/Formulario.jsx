import { useState } from "react";
import useClima from "../hooks/useClima"

const Formulario = () => {
    const {datos, handleChange, obtenerClima} = useClima();
    const [alerta, setAlerta] = useState('');

    const handleSubmit = e => {
        e.preventDefault();

        if(Object.values(datos).includes('')){
            setAlerta('Todos los Campos son Obligatorios')
            return
        }

        setAlerta('');
        obtenerClima();
    }

    return (
        <div className="contenedor">
            {alerta && <p>{alerta}</p>}
            <form onSubmit={handleSubmit}>
                <div className="campo">
                    <label htmlFor="ciudad">Ciudad:</label>
                    <input type="text" name="ciudad" id="ciudad" onChange={handleChange} value={datos.ciudad}/>
                </div>
                <div className="campo">
                    <label htmlFor="pais">País:</label>
                    <select name="pais" id="pais" onChange={handleChange} value={datos.pais}>
                        <option value="">--Seleccione--</option>
                        <option value="US">Estados Unidos</option>
                        <option value="AR">Argentina</option>
                        <option value="ES">España</option>
                        <option value="PE">Perú</option>
                        <option value="MX">México</option>
                    </select>
                </div>
                <input type="submit" value="Obtener Clima" />
            </form>
        </div>
    )
}

export default Formulario