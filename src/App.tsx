import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Vision from './components/Vision'
import Presence from './components/Presence'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Vision />
        <Presence />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
