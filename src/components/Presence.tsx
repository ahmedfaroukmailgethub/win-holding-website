import ContraGroupMark from './ContraGroupMark'

export default function Presence() {
  return (
    <section id="group" className="bg-sand py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <p className="eyebrow !text-sm sm:!text-base">Global Group</p>
        <h2 className="mt-5 font-serif text-4xl font-medium text-ink sm:text-5xl">Across Borders, One Vision, One Standard</h2>
        <ContraGroupMark className="mt-10 block text-3xl sm:text-4xl" />
      </div>
    </section>
  )
}
