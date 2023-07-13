import React from 'react';
import './LaCarte.css';
import "bootstrap/dist/css/bootstrap.min.css";
import CarteMenu from '../../img/menu-face.png';
import Offre1 from '../../img/offres-spécial-1.png';
import Offre2 from '../../img/offres-spécial-poisson.png';


function LaCarte() {
  return (
    <>
      <div className='carte-container'>
        <div className='carte-menu' >
          <h1>Le Menu</h1>
          <img src={CarteMenu} alt='menu du restaurant' className='fluid' style={{
            width: '80%',
            height: '80%',
            padding:'10px'
          }}
          />

        </div>

        <h1 style={{
          margin:'30px'
        }}>Les Offres spéciales</h1>
        
        <div className='offre-content'>

          <div className='offre-item'>
            <img src={Offre1} alt='offres spéciales CAN' />
            <p>
              C'est un poulet assaisonné et cuit à la braise + 3 portions d'alloco + 1 grande bouteille de jus (bissap, gingembre, bandji...) de votre choix. 
            </p>
          </div>

          <div className='offre-item'>
            <img src={Offre2} alt='offres spéciales CAN' />
            <p>
              C'est un poisson assaisonné et cuit à la braise + 3 portions d'alloco + 1 grande bouteille de jus (bissap, gingembre, bandji...) de votre choix. 
            </p>
          </div>
        </div>

      </div>
    </>
  )
}

export default LaCarte
