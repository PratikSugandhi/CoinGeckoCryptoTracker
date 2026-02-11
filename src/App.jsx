import CoinTable from './components/CoinTable/CoinTable.jsx'
import './App.css'
import Banner from './components/Banner/Banner.jsx';
import Navbar from "./components/Navbar/Navbar.jsx"
import { useState } from 'react';
function App() {
      const [currency, setCurrency] = useState('usd')
    return(
       <>
           <Navbar setCurrency={setCurrency} />
           <Banner />
          <CoinTable currency={currency} />
       </>
        
        
    )
}

export default App;
