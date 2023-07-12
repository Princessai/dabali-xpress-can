import React from 'react';
import { Link } from 'react-router-dom';
import './News.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js"

function News() {

    const illustrations = [
        {
            id: 1,
            title: "Prix du meilleur accueil dans la catégorie Restauration rapide",
            link: 'https://dabalixpress.com/prix-du-meilleur-accueil-dans-la-categorie-restauration-rapide/',
            body: "Après Dabali Oscars, c’est au tour de Dx plateau de remporter le 1er prix du meilleur accueil dans la catégorie Restauration rapide décerné par le baromètre de l’accueil. La nomination...",
            image: require("../../img/prix.jpg")
        },
        {
            id: 2,
            title: "Prix du meilleur Restaurant 2022",
            link: 'https://dabalixpress.com/prix-du-meilleur-restaurant-2022/',
            body: "Dieu nous a encore fait la grâce hier de rafler une nouvelle distinction, et non des moindres! Nous avons été lauréats de la catégorie meilleure restaurant d’Abidjan, prix décerné...",
            image: require("../../img/prix-2.jpg")
        },
        {
            id: 3,
            title: "Signature de franchise avec CIA",
            link: 'https://dabalixpress.com/signature-de-franchise-avec-cia/',
            body: "C’est officiel! Dabali Xpress vient de signer son premier contrat de franchise avec la Compagnie des Investisseurs Africains (CIA), dirigée par Mr Jean Yves Bragbo.Notre décision de céder la 1ere franchise...",
            image: require("../../img/signature-franchise.jpeg")
        },
    ]



    return (
        <div className='news'>
            <h1>Actualités</h1>
                <section className='news-container'>
                    {illustrations.map(illustration => {
                        return (
                            <div className="card" style={{
                                width: "25rem",
                            }}>
                                <img src={illustration.image} className="card-img-top" alt="illustration article" />
                                <div className="card-body">
                                    <h5 className="card-title">{illustration.title}</h5>
                                    <p className="card-text">{illustration.body}</p>
                                    <Link to={illustration.link} className="btn">Lire plus </Link>
                                </div>
                            </div>

                        );
                    })
                    }

                </section>

         </div>

    )
}

export default News