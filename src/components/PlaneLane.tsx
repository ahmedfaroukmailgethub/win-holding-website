// Small gold airplanes crossing the hero. Each lane is a full-viewport-width
// strip placed in the page flow, so flight paths sit in the gaps between the
// hero's content at any screen size. Decorative only; hidden for reduced motion.

function Plane({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      {/* Airplane silhouette (top view), nose pointing right */}
      <path
        transform="rotate(90 12 12)"
        fill="currentColor"
        d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"
      />
    </svg>
  )
}

type Props = { direction: 'rtl' | 'ltr'; className?: string }

export default function PlaneLane({ direction, className = '' }: Props) {
  return (
    <div aria-hidden className={`pointer-events-none relative h-6 w-screen shrink-0 motion-reduce:invisible ${className}`}>
      {direction === 'rtl' ? (
        <div className="plane-rtl absolute top-0 flex items-center text-gold">
          <Plane className="h-6 w-6 -scale-x-100" />
          <span className="ml-1 h-px w-24 bg-gradient-to-r from-gold/50 to-transparent" />
        </div>
      ) : (
        <div className="plane-ltr absolute top-0 flex items-center text-gold">
          <span className="mr-1 h-px w-24 bg-gradient-to-l from-gold/50 to-transparent" />
          <Plane className="h-6 w-6" />
        </div>
      )}
    </div>
  )
}
