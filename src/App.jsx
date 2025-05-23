import './App.css'
import Footer from './Footer'
import Hero from './Hero'
import HowItWorks from './HowItWorks'
import Mission from './Mission'
import Navbar from './Navbar'
import Whatwedo from './Whatwedo'

function App() {

  return (
    <>
    <div className='font-semibold'>
     <Navbar />
     </div>
     <Hero />
     <Whatwedo />
     <Mission />
     <HowItWorks />
     <Footer />
    </>

  )
}

export default App
