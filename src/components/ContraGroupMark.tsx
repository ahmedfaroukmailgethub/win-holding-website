// CONTRA GROUP wordmark in the WIN HOLDING-style caps, with Contra's red square.
// Set the size with a text-* class; the square scales with the font.
type Props = {
  className?: string
  gold?: boolean // letters in the logo gold instead of charcoal
  blink?: boolean // red square pulses slowly
}

export default function ContraGroupMark({ className = '', gold = false, blink = false }: Props) {
  return (
    <span className={`font-wordmark tracking-[0.18em] ${gold ? 'text-gold' : 'text-ink'} ${className}`}>
      CONTRA GROUP
      <span
        aria-hidden
        className={`ml-[0.125em] inline-block h-[0.375em] w-[0.375em] bg-[#ff4136] ${blink ? 'square-blink' : ''}`}
      />
    </span>
  )
}
