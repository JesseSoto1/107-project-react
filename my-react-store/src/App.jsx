import Catalog from './pages/Catalog';

import NavBar from './components/NavBar';
import Footer from './components/Footer';

import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";


function App(){
    return(
        <div>
            <NavBar/>
            <main className='container'>
                <Catalog/>
            </main>

            <Footer/>
        </div>
    );
}


export default App;