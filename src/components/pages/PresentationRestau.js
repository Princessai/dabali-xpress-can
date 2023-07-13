import React from 'react';
import './PresentationRestau.css';
import Restau from '../../img/devanture-1.jpg';
import Restau1 from '../../img/interieur.jpg';
import Restau2 from '../../img/interieur-1.jpg';
import Restau3 from '../../img/interieur-2.jpg';


function PresentationRestau() {
    return (
        <div className='restau'> 
            <section className='text'>
                <h1>Le Fast-food <br/> <span>Ivoirien</span> </h1>
                <p>
                    Dabali Xpress est née d’une initiative : valoriser les plats ivoiriens. C’est animé de cette volonté que sa créatrice, OLIVIA AGGRE va lancer cette chaine de restaurants à Abidjan.
                    C’est la première chaine de Fast-food ivoirien qui propose une variété de plats à partir de produits locaux, tout en alliant rapidité et efficacité ; le tout en respectant une hygiène impeccable.
                    Dabali Xpress c’est, depuis bientôt deux ans, une équipe dévouée qui se soucie du bien-être et de la satisfaction de ses clients. C’est pourquoi l’enseigne propose des prix abordables et adaptés à tous les fans de nourriture ivoirienne.

                </p>
                <button>En savoir plus ?</button>
            </section>
            <section className='images'>
                <img src={Restau} alt='entrée du restaurant' />
                <img src={Restau1} alt='intérieur du restaurant' />
                <img src={Restau2} alt='intérieur du restaurant' />
                <img src={Restau3} alt='intérieur du restaurant' />
            </section>
        </div>
    )
}

export default PresentationRestau
