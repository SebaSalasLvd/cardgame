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

const getStoredSuit = (): string | null => {
  try {
    return sessionStorage.getItem('selectedSuit') ?? null
  } catch (e) {
    return null
  }
}

export const CardSection: React.FC = () => {
  const [suit, setSuit] = useState<string | null>(null)
  const location = useLocation()

  useEffect(() => {
    const navSuit = (location.state as any)?.selectedSuit ?? getStoredSuit()
    if (navSuit) {
      setSuit(navSuit)
      try {
        sessionStorage.setItem('selectedSuit', navSuit)
      } catch (e) {}
    }
  }, [location.state])

  const mappedSuit = suit ? SUIT_MAP[suit] : null
  const filteredCards = mappedSuit
    ? cardsData.filter((card) => card.suit === mappedSuit).sort((a, b) => a.number - b.number)
    : []

  return (
    <section id="card-section" className="p-4 bg-indigo-950 min-h-screen text-white">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Selector de carta</h3>
        <Link to="/" className="text-xl text-gray-200">Volver</Link>
      </div>

      <p className="mt-4">
        {!suit
          ? 'No hay palo seleccionado. Haz click en un palo para empezar.'
          : mappedSuit === null
          ? `El palo seleccionado (${suit}) no es válido.`
          : `Has seleccionado: ${suit}`
        }
      </p>

      {mappedSuit && (
        <div className="mt-3 grid grid-cols-4 gap-3">
          {filteredCards.map((card) => {
            const file = card.path.split('/').pop() || card.path
            return (
              <div key={card.title} className="flex items-center justify-center">
                <Card file={file} alt={card.title} className="mx-auto" size={120} />
              </div>
            )
          })}
        </div>
      )}
    </section>
  )
}

export default CardSection
