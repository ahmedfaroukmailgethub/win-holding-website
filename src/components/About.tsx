import AnimatedLogo from './AnimatedLogo'
import winGroupLogo from '../assets/win-group-logo.png'
import PlaneLane from './PlaneLane'

// Company names in the body copy, set in the logo gold.
const Brand = ({ children }: { children: string }) => <span className="font-semibold text-gold">{children}</span>

export default function About() {
  return (
    <section id="about" className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:gap-24">
        <div>
          <p className="eyebrow !text-sm sm:!text-base">About WIN HOLDING</p>
          <h2 className="mt-5 font-serif text-4xl font-medium leading-tight text-ink sm:text-5xl">
            A Focused Group with a Global Outlook.
          </h2>
          <div className="mt-6 h-px w-20 bg-gold" />
          <div className="relative mx-auto mt-12 w-fit">
            <AnimatedLogo className="block aspect-[586/751] h-56 sm:h-64" />
            {/* Flight path through the W */}
            <div className="absolute left-1/2 top-[42%] -translate-y-1/2">
              <PlaneLane direction="rtl" centered />
            </div>
          </div>
          <div className="relative mx-auto mt-14 w-fit">
            <img src={winGroupLogo} alt="WIN GROUP — World Innovation Network" className="block h-48 w-auto sm:h-56" />
            {/* Flight path through the W */}
            <div className="absolute left-1/2 top-[44%] -translate-y-1/2">
              <PlaneLane direction="ltr" centered />
            </div>
          </div>
        </div>
        <div className="space-y-6 text-justify text-base font-light leading-relaxed text-ink/80">
          <p>
            From our headquarters in London, <Brand>WIN HOLDING</Brand> owns, develops, and strategically guides a diversified portfolio
            of companies serving the global aviation industry and the wider ecosystem that surrounds it. Our vision is to
            build an integrated aviation services platform that combines operational excellence, innovation, and long-term
            value creation across international markets.
          </p>
          <p>
            Through <Brand>WIN GROUP</Brand> in Dubai, we lead our regional presence across the Middle East, supported by an
            innovation-driven platform dedicated to elevating the customer journey, enhancing service quality, and
            introducing smarter, more efficient solutions across the aviation experience. Through <Brand>WIN EUROPE</Brand> in Ljubljana,
            we extend our reach across the European Union, connecting markets, partners, and opportunities while expanding
            our capabilities across a broader spectrum of aviation services — on the ground and beyond the sky.
          </p>
          <p>
            Across the Group, we are united by clear governance, shared standards, operational excellence, and one
            strategic vision. This enables us to build enduring partnerships, invest confidently in our people and
            businesses, and create sustainable value in every market we serve.
          </p>
          <p>
            At <Brand>WIN HOLDING</Brand>, our ambition reaches beyond providing aviation services. We seek to redefine experiences,
            unlock new opportunities, and shape the next generation of aviation businesses.
          </p>
          <p className="font-medium text-gold">Empowering Possibilities Beyond the Sky.</p>
        </div>
      </div>
    </section>
  )
}
