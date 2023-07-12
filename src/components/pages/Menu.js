import React from 'react';
import "./Menu.css";
import imageActive from "../../img/plat-3.jpg"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { Link } from 'react-router-dom';



function Menu() {

    const carouselSlides = [
        {
            id: 1,
            src: require("../../img/plat-1.jpg"),
        },
        {
            id: 2,
            src: require("../../img/boisson.jpg"),
        },
        {
            id: 3,
            src: require("../../img/plat-4.jpg"),
        },
        {
            id: 4,
            src: require("../../img/boisson-3.jpeg"),
        },
        {
            id: 5,
            src: require("../../img/boisson-1.jpg"),
        },

    ]




    return (
        <div className='menu'>
            <section className='carousel'>
                <div id="carouselExampleIndicators" className="carousel slide carousel-fade" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>

                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-interval="3000">
                            <img src={imageActive} className="d-block w-100" alt="produits DX" />
                        </div>

                        {carouselSlides.map(carouselSlide => {
                            return (
                                <div className="carousel-item" data-interval="3000">
                                    <img src={carouselSlide.src} className="d-block w-100" alt="produits DX" />
                                </div>

                            );
                        })
                        }
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </section>
            <section className='description'>
                <h1>La carte du <br /> <span>restaurant</span> </h1>
                <p>
                    Nous proposons à la carte de notre restaurant, un menu varié et complètement ivoirien.
                    C’est la rencontre au même endroit, de différentes saveurs locales (Foufou, sauce graine, soupe de machoirons, garba...) qui vous feront voyager aux quatre coins du pays. Pour vous rafraichir vous aurez le choix entre une multitude de jus frais 100% naturel (Bissap, gingembre, passion…) qui raviveront vos papilles !
                </p>

                <Link to='/menu'>
                    <button>
                        Le menu
                    </button>
                </Link>

            </section>
        </div>
    )
}

export default Menu
