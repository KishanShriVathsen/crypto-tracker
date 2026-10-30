import Navbar from './component/nav_bar/nav_bar';
import HeroSection from './pages/HeroSection/HeroSection';
import {Route, Routes} from 'react-router-dom';
import { useState } from 'react';
import Footer from './component/footer/footer';
function App(){
  const[selectedCurrency,setSelectedCurrency]=useState("USD");
  return(
    <>
    <header>
      <Navbar selectCurrency={selectedCurrency} setSelectedCurrency={setSelectedCurrency}/>
    </header> 
    <main>
      <Routes>
        <Route path="/" element={<HeroSection selectedCurrency={selectedCurrency}/>} />
      </Routes>
    </main>
    <footer>
      <Footer/>
    </footer>
    </>
  )
}
export default App;