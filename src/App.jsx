import CoinTable from './components/CoinTable/CoinTable.jsx'
import './App.css'
import Banner from './components/Banner/Banner.jsx';
import Navbar from "./components/Navbar/Navbar.jsx"

function App() {
    return(
       <>
           <Navbar />
           <Banner />
          <CoinTable />
       </>
        
        
    )
}

export default App;
