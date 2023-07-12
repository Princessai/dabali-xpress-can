import React from 'react';
import "./Specials.css";
import Offre1 from '../../img/offres-spécial-1.png';
import Offre2 from '../../img/offres-spécial-poisson.png';

function Specials() {
    return (
        <div className='special'>
            <hr />
            <section className='offre-container'>
                <div className='offre-content'>
                    <div className='offre-item'>
                        <img src={Offre1} alt='offres spéciales CAN' />
                    </div>

                    <div className='offre-item'>
                        <img src={Offre2} alt='offres spéciales CAN' />
                    </div>
                </div>

                <button>VOIR TOUTES LES OFFRES ET LE MENU</button>

            </section>

        </div>
    )
}

export default Specials
