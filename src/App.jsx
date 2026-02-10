import Navbar from '../components/Navbar/Navbar';
import CoinTable from '../components/CoinTable/CoinTable';
import './App.css'

function App() {
    return(
       <div>
       <Navbar />
        <h1>Hello</h1>
         <button className="btn btn-primary">
        DaisyUI Working 🌼
      </button>
        <CoinTable />
        </div>
    )
}

export default App;
