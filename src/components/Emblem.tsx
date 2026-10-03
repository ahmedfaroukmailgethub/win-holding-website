type Props = { className?: string }

// Gold WIN emblem rendered via CSS mask so it takes the current text color.
export default function Emblem({ className = '' }: Props) {
  return <span aria-hidden className={`emblem inline-block ${className}`} />
}
