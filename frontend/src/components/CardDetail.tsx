import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Card from './Card'

type CardMeta = {
  title?: string
  path?: string
  activity?: string
  description?: string
  number?: number
  suit?: string
  efecto?: string
}

export const CardDetail: React.FC = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const card = (location.state as any)?.card as CardMeta | undefined

  if (!card) {
    return (
      <div className="p-6">
        <p className="mb-4 text-xl text-gray-700">No se encontró la carta. Vuelve atrás para seleccionar una.</p>
        <button onClick={() => navigate(-1)} className="px-4 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition-all">Volver</button>
      </div>
    )
  }

  const filename = (card.path ? String(card.path).split('/').pop() : `${card.title}.svg`) || `${card.title}.svg`

  return (
    <main className="p-6 bg-indigo-950 min-h-screen text-white">
      <button onClick={() => navigate(-1)} className="text-lg text-gray-200 mb-4 p-2 bg-transparent border border-gray-300 rounded hover:bg-gray-700 transition-all">Volver</button>
      <h2 className="text-3xl font-semibold text-center text-white mb-6">{card.title}</h2>

      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="flex justify-center mb-6 md:mb-0">
          <Card file={filename} size={250} />
        </div>
        <div className="flex flex-col gap-4 w-full md:w-2/3">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-medium text-amber-300">Instrucciones de la Actividad</h3>
            <p className="mt-4 text-lg text-gray-200">{card.activity}</p>
            <p className="mt-4 text-lg text-gray-200">{card.description}</p>
            <div>
                <h4 className="text-lg font-medium text-indigo-300 mt-4">Efecto de la Carta</h4>
                <p className="mt-2 text-lg text-gray-200">{card.efecto}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
