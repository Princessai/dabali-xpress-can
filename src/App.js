import './App.css';
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
        <Route path='/' exact component={Home} />
        <Route path='/menu' component={LaCarte} />
        <Route path='/reserver' component={Reserver} />
      </Routes>


    </div>
  );
}

export default App;
