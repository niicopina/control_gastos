import React from 'react'
import NuevoPresupuesto from './NuevoPresupuesto'
import ControlPresupuesto from './ControlPresupuesto'


const Header = ({presupuesto, setPresupuesto,
                 isValidPresupuesto, setIsValidPresupuesto, gastos}) => {
  return (
    <header>
        <h1>Planificador de gastos</h1>

        {isValidPresupuesto ? (
          <ControlPresupuesto 
            gastos={gastos}
            presupuesto={presupuesto}
          />
        ) : (
          <NuevoPresupuesto 
            presupuesto={presupuesto}
            setPresupuesto={setPresupuesto}
            setIsValidPresupuesto={setIsValidPresupuesto}
          />
        )}
    </header>
  )
}

export default Header