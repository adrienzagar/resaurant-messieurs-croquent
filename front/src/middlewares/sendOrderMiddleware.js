import axios from 'axios';
import { SEND_ORDER } from '../actions/order'

const sendOrderMiddleware = (store) => (next) => (action) => {
    switch (action.type) {
        case SEND_ORDER: {
            // console.log('ici je veux envoyer ma commande');
            // console.log(store.getState())

            const { firstname, lastname, phone_number, email } = store.getState();

            axios.post('http://localhost:8080/api/order', {
                firstname, 
                lastname, 
                phone_number, 
                email
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