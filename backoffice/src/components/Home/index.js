import React from 'react';
import { NavLink } from 'react-router-dom';

import './styles.scss';

const Home = ({ links }) => { console.log(links[2].path) 
    return(
  <div className='home'>
    <div className='home__container'>
        <h1 className='home__title'>Bienvenue sur votre outil de gestion de commande.</h1>
        <p className='home__text'>Pour consulter les produits ou les commandes en cours du restaurant, cliquer sur un des boutons ci-dessous ou dans le menu déroulant situé sur la gauche</p>
            <div className="home__link" >
                <NavLink to={links[2].path} exact >
                    <button className="home__button">
                        <i className={links[2].icon}></i>
                        <span className="bm-item-link">{links[2].name}</span>
                    </button>
                </NavLink>
                <NavLink to={links[1].path} exact >
                    <button className="home__button">
                        <i className={links[1].icon}></i>
                        <span className="bm-item-link">{links[1].name}</span>
                    </button>
                </NavLink>
            </div>
    </div>
  </div>
)};
export default Home;
