import React from 'react';
import './Footer.css';
import Logo from '../../img/logo-png1.png';
import { FaAddressCard, FaEnvelope, FaLocationArrow, FaPhone } from 'react-icons/fa';


function Footer() {
    return (
        <div className='footer-container'>
            <div className='footer-content'>

                <div className='newsLetter'>
                    <p>
                        Abonnez-vous pour recevoir nos offres et promotions directement dans votre boîte mail !
                    </p>
                    <form action='' method='get'>
                        <label for="email">Votre email: </label>
                        <input type='email' placeholder='Email...' />
                        <button type='submit'>S'abonner</button>
                    </form>
                </div>

                <hr />

                <div className='emplacement'>
                    <FaLocationArrow/>
                    <div>
                        <li>DX - Cocody angre les oscars</li>
                        <li>DX - Plateau rue des Banques</li>
                        <li>DX - Riviera 2</li>
                        <li>DX - Zone 4</li>
                    </div>
                </div>

                <hr />

                <div className='contacts'>
                    <div className='icon'>
                        <FaPhone />
                        <div>
                            <a href='tel:+0767767676'>+225 07 67 767 676</a>
                            <a href='tel:+2522018760'>+225 2522018760</a>
                        </div>
                    </div>
                    <div className='icon'>
                        <FaEnvelope />
                        <a href='mailto: info@dabalixpress.com'>info@dabalixpress.com</a>
                    </div>
                </div>

            </div>
            <p>
                &copy;
                <div>
                    <img src={Logo} alt='logo DX' />
                </div>
                - Tous droits réservés
            </p>
        </div>
    )
}

export default Footer
