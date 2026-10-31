import Navbar from './component/nav_bar/nav_bar';
import HeroSection from './pages/HeroSection/HeroSection';
import {Route, Routes} from 'react-router-dom';
import { useState } from 'react';
import Footer from './component/footer/footer';
import Coin_Details from './pages/coin_details_page/coin_details';
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
        <Route path='/coin/:coinId' element={<Coin_Details selectedCurrency={selectedCurrency}/>}/>{/*The : (colon) tells React Router that this part of the URL is a dynamic parameter whose value can change and Link sends the coin ID through the URL, and :coinId catches that changing value */}
      </Routes>
    </main>
    <footer className="flex justify-center">
      <Footer/>
    </footer>
    </>
  )
}
export default App;