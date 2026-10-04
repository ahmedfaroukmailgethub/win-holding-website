import rings from '../assets/logo-rings.png'
import still from '../assets/logo-static.png'

type Props = { className?: string }

// Stacked brand logo. The rings around the "W" rotate continuously; the W and
// wordmark stay still.
export default function AnimatedLogo({ className = '' }: Props) {
  return (
    <svg viewBox="0 0 586 751" role="img" aria-label="WIN HOLDING — Sky & Beyond" className={className}>
      <g className="logo-spin">
        <image href={rings} width="586" height="751" />
      </g>
      <image href={still} width="586" height="751" />
    </svg>
  )
}
