import React from 'react';
import CarteMenu from '../../img/menu-face.png';
import Offre1 from '../../img/offres-spécial-1.png';
import Offre2 from '../../img/offres-spécial-poisson.png';


function LaCarte() {
  return (
    <div>
      <div className='carte-menu' >
        <img src={CarteMenu} alt='menu du restaurant' style={{
          width: '700px',
          height: '700px',
        }}
        />

      </div>

      <div className='offre-content'>
                    <div className='offre-item'>
                        <img src={Offre1} alt='offres spéciales CAN' />
                    </div>

                    <div className='offre-item'>
                        <img src={Offre2} alt='offres spéciales CAN' />
                    </div>
                </div>

    </div>
  )
}

export default LaCarte
