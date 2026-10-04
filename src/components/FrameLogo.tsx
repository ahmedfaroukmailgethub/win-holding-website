// A logo whose decorative frame rotates around its centre while the inner
// emblem and name stay still. `frame` and `still` are same-size layers cut
// from the original logo; (cx, cy) is the frame's centre in image pixels.
type Props = {
  frame: string
  still: string
  width: number
  height: number
  cx: number
  cy: number
  alt: string
  className?: string
}

export default function FrameLogo({ frame, still, width, height, cx, cy, alt, className = '' }: Props) {
  return (
    <svg viewBox={`0 0 ${width} ${height}`} role="img" aria-label={alt} className={className} style={{ aspectRatio: `${width} / ${height}` }}>
      <g className="logo-spin" style={{ transformOrigin: `${cx}px ${cy}px` }}>
        <image href={frame} width={width} height={height} />
      </g>
      <image href={still} width={width} height={height} />
    </svg>
  )
}
