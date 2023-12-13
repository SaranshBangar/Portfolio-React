import react from 'react'
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
const App = () => {
  return (
    <main className='flex flex-col w-screen bg-white text-black justify-center items-center h-auto'>
      <section className='h-auto flex flex-col items-center w-fit md:w-10/12'>
        <Navbar />
        <section className='w-full mx-12 h-auto my-6 flex flex-col-reverse lg:flex-row lg:justify-evenly items-center gap-2' id="Home">
          <Home />
        </section>
        <section id="Projects" className='w-full h-auto item-center justify-center my-6'>
          <Projects />
        </section>
        <section id="Contact" className='w-full h-auto my-6'>
          <Contact />
        </section>
      </section>
    </main>
  )
}
export default App;