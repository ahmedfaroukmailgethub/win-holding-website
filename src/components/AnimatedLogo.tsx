import { useEffect, useId, useState } from 'react'
import rings from '../assets/logo-rings.png'
import still from '../assets/logo-static.png'

type Props = { className?: string }

// Stacked brand logo. The rings around the "W" ripple like waves (SVG
// turbulence displacement); the W and wordmark stay still.
export default function AnimatedLogo({ className = '' }: Props) {
  const filterId = `waves-${useId().replace(/:/g, '')}`
  const [reduceMotion, setReduceMotion] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduceMotion(mq.matches)
    const onChange = (e: MediaQueryListEvent) => setReduceMotion(e.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  return (
    <svg viewBox="0 0 586 751" role="img" aria-label="WIN HOLDING — Sky & Beyond" className={className}>
      <defs>
        <filter id={filterId} x="-5%" y="-5%" width="110%" height="110%" colorInterpolationFilters="sRGB">
          <feTurbulence type="fractalNoise" baseFrequency="0.006 0.008" numOctaves={1} seed={4} result="noise">
            {!reduceMotion && (
              <animate
                attributeName="baseFrequency"
                dur="6s"
                values="0.006 0.008; 0.009 0.005; 0.006 0.008"
                keyTimes="0; 0.5; 1"
                calcMode="spline"
                keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
                repeatCount="indefinite"
              />
            )}
          </feTurbulence>
          <feDisplacementMap in="SourceGraphic" in2="noise" scale={reduceMotion ? 0 : 9} xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </defs>
      <g className={reduceMotion ? undefined : 'logo-waves'}>
        <image href={rings} width="586" height="751" filter={`url(#${filterId})`} />
      </g>
      <image href={still} width="586" height="751" />
    </svg>
  )
}
