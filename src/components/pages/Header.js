import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import './Header.css';
import Logo from '../../img/logo-png1.png';
import Home from '../Home';
import PresentationRestau from "./PresentationRestau";
import PresentationCAN from "./PresentationCAN";
import News from "./News";
import Menu from "./Menu";
import Specials from "./Specials";
import { Link, animateScroll as scroll } from 'react-scroll';




function Header() {


  return (
    <div>

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className='logo'>
          <img src={Logo} alt='logo dabaliXpress' style={{
            marginRight: '200px',
          }} />

        </div>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className='onglets'>
          <li className="nav-item active"><Link to='home' smooth={true} duration={1000} className='hvr-underline-from-center' >Accueil</Link></li>

          <li className="nav-item active"><Link to='PresentationRestau' smooth={true} duration={1000} className='hvr-underline-from-center'>A propos de nous</Link></li>

          <li className="nav-item active"><Link to='menu' smooth={true} duration={1000} className='hvr-underline-from-center' >Menu</Link></li>

          <li className="nav-item active"><Link to='Specials' smooth={true} duration={1000} className='hvr-underline-from-center'>Offres Spéciales</Link></li>
        </ul>

        </div>
      </nav>


      <div id='home'>
        <Home />
      </div>

      <div id='PresentationRestau'>
        <PresentationRestau />
      </div>

      <div id='PresentationCAN'>
        <PresentationCAN />

      </div>

      <News />

      <div id='menu'>
        <Menu />

      </div>

      <div id='Specials'>
        <Specials />

      </div>


    </div>
  )
}

export default Header
