import CoinTable from './components/CoinTable/CoinTable.jsx'
import './App.css'
import Banner from './components/Banner/Banner.jsx';
import Navbar from "./components/Navbar/Navbar.jsx"
import { useState } from 'react';
import { CurrencyContext } from './context/CurrencyContext.js';
import Home from './pages/Home.jsx';
function App() {
      const [currency, setCurrency] = useState('usd')
    return(
       <>
           <CurrencyContext.Provider value={ {currency, setCurrency} }>
             <Home />
           </CurrencyContext.Provider>
       </>
        
        
    )
}

export default App;
