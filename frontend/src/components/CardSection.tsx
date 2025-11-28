import React, { useEffect, useState } from 'react'
import { useLocation, Link } from 'react-router-dom'
import Card from './Card'
import cardsData from '../data/data.json'

const SUIT_MAP: Record<string, string> = {
  corazon: 'hearts',
  pica: 'spades',
  diamante: 'diamonds',
  trebol: 'clubs',
}

export const CardSection: React.FC = () => {
  const [suit, setSuit] = useState<string | null>(null)
  const location = useLocation()

  useEffect(() => {
    const navSuit = (location.state as any)?.selectedSuit
    if (navSuit) {
      setSuit(navSuit)
      try {
        sessionStorage.setItem('selectedSuit', navSuit)
      } catch (e) {}
      return
    }

    try {
      const stored = sessionStorage.getItem('selectedSuit')
      if (stored) setSuit(stored)
    } catch (e) {}
  }, [location.state])

  const mappedSuit = suit ? SUIT_MAP[suit] ?? null : null

  const filtered = mappedSuit
    ? (cardsData as Array<any>).filter((c) => c.suit === mappedSuit).sort((a, b) => a.number - b.number)
    : []

  return (
    <section id="card-section" className="p-4 bg-indigo-950 min-h-screen text-white">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Selector de carta</h3>
        <Link to="/" className="text-xl text-gray-200">Volver</Link>
      </div>

      {!suit ? (
        <p className="mt-4">No hay palo seleccionado. Haz click en un palo para empezar.</p>
      ) : mappedSuit === null ? (
        <p className="mt-4">El palo seleccionado (<strong className="capitalize">{suit}</strong>) no es válido.</p>
      ) : (
        <div className="mt-4">
          <p>
            Has seleccionado: <strong className="capitalize">{suit}</strong>
          </p>

          <div className="mt-3">
            <div className="grid grid-cols-4 gap-3">
              {filtered.map((card) => {
                const file = String(card.path).split('/').pop() || card.path
                return (
                  <div key={card.title} className="flex items-center justify-center">
                    <Card file={file} alt={`${card.title}`} className="mx-auto" size={120} />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default CardSection
