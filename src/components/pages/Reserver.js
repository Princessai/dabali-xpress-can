import React from 'react';
import './Reserver.css';
import Logo from '../../img/logo-png1.png';


function Reserver() {
    return (
        <div className='reserver-container'>
            <h2>Réserver</h2>
            <div className='reserver'>
                <div className='logo'>
                    <img src={Logo} alt='logo dabaliXpress' />
                </div>
                <form action='' method='get'>
                    <input type='text' placeholder='Nom' />
                    <input type='text' placeholder='Prénom' />
                    <input type='number' min={0} max={30} placeholder='Nombre de place' style={{ alignSelf: "stretch" }} />
                    <input type='mail' placeholder='Mail' />

                    <div>
                        <button style={{
                            backgroundColor: "#000",

                        }} >Retour</button>

                        <button type='submit' style={{
                            backgroundColor: "#FE7702",

                        }}>Réserver</button>
                    </div>

                </form>

            </div>
        </div>
    )
}

export default Reserver
