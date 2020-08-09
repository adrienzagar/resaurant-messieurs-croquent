import axios from 'axios';
import { SEND_ORDER } from '../actions/order'
import { returnTotalPrice } from '../selectors/index'

const sendOrderMiddleware = (store) => (next) => (action) => {
    switch (action.type) {
        case SEND_ORDER: {
            // console.log('ici je veux envoyer ma commande');
            console.log(store.getState())

            const state = store.getState();

            // Destructuring the state to get what is needed in the request
            const { status, comment, user, cart, listPrice} = state.command;
            const {values} = state.form.TestForm
            console.log(values)

            // Use the map function on Cart to return a new const that contain the right structure expected from the back-end
            const orderLines = cart.map((productMap) => {
                return {
                    quantity: productMap.quantity,
                    product: {
                        id: productMap.id
                    }
                }
            });

            // Use a function (selector) that return the total price of every prices placed in listPrice
            const totalPrice = returnTotalPrice(listPrice).totalPrice.toFixed(2)
            // Convert totalPrice to integer
            const price = parseInt(totalPrice);

            console.log(price, 'Prix Total')
            axios.post('http://ec2-54-160-78-162.compute-1.amazonaws.com/api/api/order', {
                comment,
                price,
                orderLines,
                status,
                // user,
                values
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