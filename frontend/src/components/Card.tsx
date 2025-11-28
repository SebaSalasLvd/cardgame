
import React from 'react'
import { useNavigate } from 'react-router-dom'
import cardsData from '../data/data.json'

type Props = {
  file: string
  alt?: string
  className?: string
  size?: number | string
}

const images = import.meta.glob('../../faces/*.{svg,png}', { query: '?url', import: 'default', eager: true }) as Record<string, string>

const toTailwindSize = (size?: number | string) => {
  if (!size) return ''
  if (typeof size === 'number') return `w-[${size}px] h-auto`
  if (/^\d+$/.test(size)) return `w-[${size}px] h-auto`
  return `w-[${size}] h-auto`
}

const cx = (...items: Array<string | undefined | false>) => items.filter(Boolean).join(' ')

export const Card: React.FC<Props> = React.memo(function Card({ file, alt, className, size }) {
  const navigate = useNavigate()
  const meta = (cardsData as Array<any>).find((c) => c.path?.endsWith(file) || c.title === file || `${c.title}.svg` === file)

  const matchKey = Object.keys(images).find((k) => k.endsWith(`/${file}`) || k.endsWith(file))
  const src = matchKey ? images[matchKey] : ''

  if (!src) {
    return (
      <div role="img" aria-label={`Archivo no encontrado: ${file}`} className={cx(className, 'inline-flex items-center justify-center p-2 rounded bg-white')}>
        <span className="text-red-600 text-sm">Archivo no encontrado: {file}</span>
      </div>
    )
  }

  const handleClick = () => {
    const payload = meta ?? { title: file.replace(/\.svg$/, ''), path: `faces/${file}`, activity: '' }
    try {
      navigate('/card-detail', { state: { card: payload } })
    } catch (e) {
      // fallback: update hash with card title
      window.location.hash = `#card-detail-${payload.title}`
    }
  }

  const sizeClass = toTailwindSize(size)
  const classes = cx('object-contain', sizeClass, className, 'cursor-pointer')

  return (
    <div className='rounded-2xl bg-white hover:-translate-y-1.5 hover:shadow-lg transform transition-transform duration-150 ease-in-out'>
        <img 
            src={src} 
            alt={alt ?? meta?.title ?? file} 
            title={meta?.activity ?? undefined} 
            className={classes}
            onClick={handleClick} />
    </div>
  )
})

export default Card
