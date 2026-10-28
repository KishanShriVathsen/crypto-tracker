import Navbar from './component/nav_bar/nav_bar';
import HeroSection from './pages/HeroSection/HeroSection';
import {Route, Routes} from 'react-router-dom';
function App(){
  return(
    <>
    <header>
      <Navbar/>
    </header> 
    <main>
      <Routes>
        <Route path="/" element={<HeroSection/>}/>
      </Routes>
    </main>
    </>
  )
}
export default App;