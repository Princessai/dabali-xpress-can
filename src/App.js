import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js"
import Header from './components/pages/Header';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/pages/Footer'
import ScrollButton from './components/ScrollButton';
import Home from './components/Home';
import LaCarte from './components/pages/LaCarte';
import Reserver from './components/pages/Reserver';

function App() {
  return (
    <div className="App">
        <Header />
        <ScrollButton />
        <Footer />
        <Routes>
          <Route path='/dabali-xpress-can' element={<Home />} />
          <Route path='/menu' element={<LaCarte />} />
          <Route path='/reserver' element={<Reserver />} />
        </Routes>
    </div>
  );
}

export default App;
