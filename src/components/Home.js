import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import LogoNoirBlanc from "../img/Plan-de-travail-1-copie-2.png";
import LogoCroix from "../img/x.png";
import LogoCan from "../img/Plan-de-travail-1-copie.png";
import { FaInstagram, FaTiktok } from "react-icons/fa";



function Home() {

  return (
    <div>
      <section className="home">
        <div className="logos">
          <img src={LogoNoirBlanc} alt='logo dabali Xpress noir et blanc' className="logos-child" />
          <img src={LogoCroix} alt='croix dabali Xpress' className="logos-child-x"></img>
          <img src={LogoCan} alt='logo CAN 2023' className="logos-child" />

        </div>
        <h1 className="akwaba">AKWABA SUR DABALI XPRESS</h1>
        <div className="text">
          <p className="promesse">Savourez la CAN avec nous !</p>
          <p>CAN 2023: Janvier 2024 - Février 2024</p>
        </div>
        <div className="boutons">
          <Link to='https://dabalixpress.com/menus/' target="_blank">
          <button>Commander</button>
          </Link>

          <Link to='/reserver'>
          <button>Réserver</button>
          </Link>
        </div>

        <div className="RS">
          <Link to='https://www.instagram.com/etd_dabali/' target="_blank">
          <FaInstagram style={{
            fontSize: '30px',
            color: 'white',
          }} />
          </Link>
          &nbsp;
          <Link to='https://www.tiktok.com/@dabali.xpress_etd' target="_blank">
          <FaTiktok style={{
            fontSize: '30px',
            color: 'white',
          }} />

          </Link>
        </div>
      </section>

    </div>
  )
}

export default Home
