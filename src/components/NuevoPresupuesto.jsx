import React from 'react'

const NuevoPresupuesto = ({presupuesto, setPresupuesto}) => {
  return (
    <div className='contenedor-presupuesto contenedor sombra'>
        <form className='formulario'>
            <div className='campo'>
                <label htmlFor="">Definir Presupuesto</label>
                <input type="text" className='nuevo-presupuesto'
                    placeholder='añade tu presupuesto'
                    value={presupuesto}
                    onChange={e => setPresupuesto(e.target)}
                
                />
            </div>
            <input type="submit" value="Añadir" />
        </form>
    </div>
  )
}

export default NuevoPresupuesto