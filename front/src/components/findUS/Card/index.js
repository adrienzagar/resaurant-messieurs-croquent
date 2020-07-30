import React from 'react' ;


import './styles.scss' ;

const CardComponent = () => {
    return (
        <div className='cardComponent'>
            <h2 className='cardComponent__name'> MONSIEURS CROQUENT </h2>
            <div className='cardComponent__info'>
              
                <p>  <i className="fa fa-map-marker" aria-hidden="true" fa-lg></i> : 25 Cour Pasteur</p>
                <p> 33 000 Bordeaux</p>
                
                <p><i className="fa fa-phone-square" aria-hidden="true"></i> : 05 57 30 91 39</p>  
                
                <p><i className="fa fa-envelope" aria-hidden="true"></i> : contact@messieurscroquent.fr</p>
            </div>
            <div className='cardComponent__info'>
                
                <p><i className="fa fa-clock-o" aria-hidden="true"></i>  OUVERT DU LUNDI AU SAMEDI </p>
                <p>12:00 - 14:00  /  19:00 - 22:30</p>
                <p> FERME DIMANCHE ET LUNDI</p>
            </div>
        </div>
    );
} 
export default CardComponent;