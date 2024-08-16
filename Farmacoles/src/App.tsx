import './App.css'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/NavBar'
import Home from './Pages/Home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {


  return (
    <> <BrowserRouter>
          
    <Navbar />
    <div className='min-h-[30vh]'>
  <Home />
  

  </div>
  <Footer />
  </BrowserRouter>
    </>
  )
}

export default App
