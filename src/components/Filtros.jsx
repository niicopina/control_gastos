import React from 'react'
import { useState, useEffect } from 'react'
const Filtros = ({filtro, setFiltro}) => {
  return (
    <div className='filtros sombra contenedor'>
        <form action="">
            <div className="campo">
                <label>Filtrar Gastos</label>
                <select 
                    value={filtro}
                    onChange={e => setFiltro(e.target.value)}>
                        <option value="">--Categorías--</option>
                        <option value="ahorro">Ahorro</option>
                        <option value="comida">Comida</option>
                        <option value="alquiler">Alquiler</option>
                        <option value="tarjetas">Tarjetas</option>
                        <option value="transporte">Transporte</option>
                        <option value="compras hogar">Compras del hogar</option>
                        <option value="ropa">Ropa</option>
                        <option value="cuotas">Cuotas</option>
                        <option value="ocio">Ocio</option>
                        <option value="salud">Salud</option>
                        <option value="suscripciones">Suscripciones</option>
                </select>
            </div>
        </form>
    </div>
  )
}

export default Filtros