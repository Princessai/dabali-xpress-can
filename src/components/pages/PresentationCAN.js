import React from 'react';
import './PresentationCAN.css';


function PresentationCAN() {

  const slides = [
    {
      title: "les Supporters",
      body: "Les supporters de la Coupe d'Afrique des Nations sont les véritables héros des tribunes. Leur passion débordante et leur soutien indéfectible font vibrer les stades lors de chaque match. Habillés aux couleurs nationales, ils créent une atmosphère électrique, chantant, dansant et encourageant leur équipe avec ferveur. Leur présence est un symbole de fierté nationale et de l'unité africaine, transcendant les frontières et célébrant la diversité culturelle du continent. Les supporters de la Coupe d'Afrique des Nations sont les acteurs incontournables de ce tournoi légendaire.",
      src: require("../../img/supporter-ivoiriens.jpg")
    },
    {
      title: "les Stades",
      body: "La Côte d'Ivoire, pays hôte de la Coupe d'Afrique des Nations, a préparé des stades spectaculaires pour accueillir cet événement sportif majeur. Des enceintes modernes et impressionnantes ont été construites dans tout le pays, offrant des infrastructures de classe mondiale pour les rencontres. Ces stades sont non seulement des lieux de compétition, mais aussi des symboles de l'engagement de la Côte d'Ivoire envers le football et son désir d'offrir une expérience inoubliable aux équipes et aux supporters. Prêts à briller sous les projecteurs, ces stades promettent d'être le théâtre de moments de gloire et de passion pendant la Coupe d'Afrique des Nations en Côte d'Ivoire.",
      src: require("../../img/stade-laurent-pokou.jpg")
    },
    {
      title: "les Joueurs vedettes",
      body: "La Coupe d'Afrique des Nations 2023 réunira les meilleures équipes nationales du continent, chacune comptant des joueurs vedettes de renommée internationale. Des noms tels que Mohamed Salah (Égypte), Sadio Mané (Sénégal), Wilfried Zaha (Côte d'Ivoire) et Riyad Mahrez (Algérie) émerveilleront les fans avec leur talent exceptionnel et leur capacité à influencer le cours d'un match. Les stars émergentes comme Achraf Hakimi (Maroc), Victor Osimhen (Nigeria) et Ismaïla Sarr (Sénégal) apporteront leur énergie et leur jeunesse dynamique sur le terrain. Avec ces talents éblouissants à leur disposition, les équipes qualifiées pour la CAN 2023 promettent de nous offrir un spectacle de football de haut niveau.",
      src: require("../../img/mohamed-salah-2.jpg")
    },
    {
      title: "les Equipes en compétition",
      body: "La Coupe d'Afrique des Nations 2023 verra s'affronter les meilleures équipes nationales du continent lors d'un tournoi passionnant. Parmi les équipes en compétition, on retrouve des favoris tels que le Sénégal, le Cameroun, le Nigeria, l'Égypte, l'Algérie et la Côte d'Ivoire, ainsi que d'autres nations talentueuses. Les matches débuteront le 13 janvier 2024 et se dérouleront sur plusieurs semaines, avec des phases de groupes, des quarts de finale, des demi-finales et enfin, la grande finale prévue le 11 février 2024. Les fans du football africain attendent avec impatience cette compétition palpitante qui promet d'offrir des moments de suspense, de passion et de fierté nationale.",
      src: require("../../img/coupe-CAN-2.jpeg")
    },
  ]


  return (
    <div>
      <section className='slide-container'>
        {slides.map(slide => {
          return (
            <div className='slide-box' style={{
              background: `url(${slide.src})`
            }} >
              <div className='slide-box-content'>
                <h2>{slide.title}</h2>
                <p>
                  {slide.body}
                </p>
              </div>
            </div>

          );
        })
        }

      </section>

    </div>
  )
}

export default PresentationCAN
