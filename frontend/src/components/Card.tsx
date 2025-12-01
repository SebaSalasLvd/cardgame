import React from 'react'
import { useNavigate } from 'react-router-dom'
import cardsData from '../data/data.json'

type Props = {
  file: string
  alt?: string
  className?: string
  size?: number | string
}

type CardMeta = {
  title: string
  path: string
  activity?: string
}

const images = import.meta.glob('../../faces/*.{svg,png}', { query: '?url', import: 'default', eager: true }) as Record<string, string>

const CardNotFound: React.FC<{ file: string }> = ({ file }) => (
  <div role="img" aria-label={`Archivo no encontrado: ${file}`} className="inline-flex items-center justify-center p-2 rounded bg-white">
    <span className="text-red-600 text-sm">Archivo no encontrado: {file}</span>
  </div>
)

export const Card: React.FC<Props> = React.memo(function Card({ file, alt, className, size }) {
  const navigate = useNavigate()

  const meta = (cardsData as Array<CardMeta>).find(c => c.path?.endsWith(file) || c.title === file || `${c.title}.svg` === file)
  const matchKey = Object.keys(images).find(k => k.endsWith(`/${file}`) || k.endsWith(file))
  const src = matchKey ? images[matchKey] : ''

  if (!src) return <CardNotFound file={file} />

  const handleClick = () => {
    const payload = meta ?? { title: file.replace(/\.svg$/, ''), path: `faces/${file}`, activity: '' }
    navigate('/card-detail', { state: { card: payload } })
  }

  return (
    <div className="rounded-2xl bg-white hover:-translate-y-1.5 hover:shadow-lg transform transition-transform duration-150 ease-in-out">
      <img 
        src={src} 
        alt={alt ?? meta?.title ?? file} 
        title={meta?.activity ?? undefined} 
        className={`object-contain cursor-pointer ${size ? `w-[${size}] h-auto` : ''} ${className ?? ''}`}
        onClick={handleClick} 
      />
    </div>
  )
})

export default Card
