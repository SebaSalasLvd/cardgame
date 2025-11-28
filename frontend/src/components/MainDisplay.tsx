import React from 'react'
import { Link } from 'react-router-dom'
import SuitCard from './SuitCard'

export const MainDisplay: React.FC = () => {
  return (
    <div className='bg-indigo-950 text-white h-full w-full'>
        <main className="p-8 flex flex-col items-center mt-8">
            <h1 className="text-4xl font-bold mb-4">MVP y Lean Startup: El Juego de Desarrollo Ágil</h1>
            <h3 className="text-3xl font-semibold mb-2 mt-6">Elige un palo</h3>
            <p className="text-sm text-gray-200 mb-3 text-center max-w-xl">Selecciona un palo para ver todas las cartas disponibles. Haz click en una carta para ver su detalle y actividad.</p>
            <Link to="/about" className="text-sm text-indigo-200 hover:underline mb-6">Instrucciones</Link>

            <div className="flex gap-6 flex-wrap justify-center">
                <SuitCard type="corazon" className="w-36 h-44 text-xl" />
                <SuitCard type="pica" className="w-36 h-44 text-xl" />
                <SuitCard type="diamante" className="w-36 h-44 text-xl" />
                <SuitCard type="trebol" className="w-36 h-44 text-xl" />
            </div>
        </main>
    </div>
  )
}
