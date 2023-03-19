import {useState} from 'react'
import Mensaje from './Mensaje'

const NuevoPresupuesto = ({presupuesto, setPresupuesto}) => {

    const [mensaje, setMensaje] = useState('')

    const handlePresupuesto = (e) => {
        e.preventDefault()

        if(!Number(presupuesto) || Number(presupuesto) < 0 ){
            setMensaje('no es un ppto valido')
        }else{
            console.log('si es un numero')
        }
    }


  return (
    <div className='contenedor-presupuesto contenedor sombra'>
        <form className='formulario' onSubmit={handlePresupuesto}>
            <div className='campo'>
                <label htmlFor="">Definir Presupuesto</label>
                <input type="text" className='nuevo-presupuesto'
                    placeholder='añade tu presupuesto'
                    value={presupuesto}
                    onChange={e => setPresupuesto(e.target)}
                
                />
            </div>
            <input type="submit" value="Añadir" />
            {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
        </form>
    </div>
  )
}

export default NuevoPresupuesto