// CONTRA GROUP wordmark in the WIN HOLDING-style caps, with Contra's red square.
// Set the size with a text-* class; the square scales with the font.
export default function ContraGroupMark({ className = '' }: { className?: string }) {
  return (
    <span className={`font-wordmark tracking-[0.18em] text-ink ${className}`}>
      CONTRA GROUP
      <span aria-hidden className="ml-[0.125em] inline-block h-[0.375em] w-[0.375em] bg-[#ff4136]" />
    </span>
  )
}
