import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Group from './components/Group'
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
        <Group />
        <Presence />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
