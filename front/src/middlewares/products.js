import axios from 'axios';
import { GET_PRODUCTS } from '../actions/index';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case GET_PRODUCTS:

      axios.get('http://localhost:8000/api/products')
        .then((response) => {
          console.log(response);
          console.log('Bonjour')

        //   store.dispatch(saveRecipes(response.data));
        })
        .catch((error) => {
          // en cas d'erreur de la requête je veux changer la valeur de error dans mon state
        //   const actionToDispatch = setError();
        //   store.dispatch(actionToDispatch);
          console.log('Une erreur est survenue', error);
        });

      break;
    default:
      next(action);
      break;
  }
};
