import React from 'react'

const ControlPresupuesto = ({presupuesto}) => {

    const formatearCantidad = (cantidad) => {
        return cantidad.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        })
    }


  return (
    <div className='control-presupuesto contenedor sombra dos-columnas'>
        <div>
            <p>grafica aqui</p>
        </div>
        <div className='contenido-presupuesto'>
            <p>
                <span>PPTO: </span>{formatearCantidad(presupuesto)}
            </p>
            <p>
                <span>Disponible: </span>{formatearCantidad(0)}
            </p>
            <p>
                <span>Gastos: </span>{formatearCantidad(0)}
            </p>
        </div>
    </div>
  )
}

export default ControlPresupuesto