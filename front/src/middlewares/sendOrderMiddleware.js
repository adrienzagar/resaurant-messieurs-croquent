import axios from 'axios';
import { SEND_ORDER } from '../actions/order'

const sendOrderMiddleware = (store) => (next) => (action) => {
    switch (action.type) {
        case SEND_ORDER: {
            // console.log('ici je veux envoyer ma commande');
            console.log(store.getState())
            const state = store.getState();
            const { firstname, lastname, phone_number, email, cart } = state.command;

            axios.post('http://localhost/Fantasy/apotheose/sandwicherie/back/sandwicherieBack/public/api/order', {
                firstname, 
                lastname, 
                phone_number, 
                email,
                cart
            }).then((response) => {
                console.log(response, 'ceci est la réponse')
            }).then((error) => console.log(error, 'ERREUR'));
            
            next(action);
            break;
        }
        
        default:
            next(action);
    }
}

export default sendOrderMiddleware;