import React from 'react'
import { useNavigate } from 'react-router-dom'

export type SuitType = 'corazon' | 'pica' | 'diamante' | 'trebol'

interface Props {
  type: SuitType
  onSelect?: (suit: SuitType) => void
  className?: string
}

const SUIT_SYMBOLS: Record<SuitType, { symbol: string; color: string; label: string }> = {
  corazon: { symbol: '♥', color: '#e11d48', label: 'Corazón' },
  pica: { symbol: '♠', color: '#111827', label: 'Pica' },
  diamante: { symbol: '♦', color: '#ef4444', label: 'Diamante' },
  trebol: { symbol: '♣', color: '#111827', label: 'Trébol' },
}

const SuitCard: React.FC<Props> = ({ type, className }) => {
  const suit = SUIT_SYMBOLS[type]
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/card-section', { state: { selectedSuit: type } })
  }

  return (
    <button
      onClick={handleClick}
      aria-label={`Seleccionar ${suit.label}`}
      className={
        `inline-flex flex-col items-center justify-center gap-1 w-28 h-32 p-3 rounded-xl ` +
        `bg-linear-to-b from-white to-slate-50 border border-slate-100 shadow-md ` +
        `hover:-translate-y-1.5 hover:shadow-lg transform transition-transform duration-150 ease-in-out ` +
        `focus:outline-none focus:ring-4 focus:ring-indigo-200 ` +
        (className ? className : '')
      }
    >
      <div className="suit-symbol text-4xl leading-none" style={{ color: suit.color }}>
        {suit.symbol}
      </div>
      <div className="suit-name text-sm text-slate-700 capitalize">{suit.label}</div>
    </button>
  )
}

export default SuitCard
