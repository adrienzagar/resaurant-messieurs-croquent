//! == Import : npm
import axios from 'axios';

//! == Import : local (actions)
import { EDIT_STATUS, GET_STATUS, saveStatus } from '../actions/header';
//! == Utils Axios for recupered JSON via API

const openCloseMiddleware = (store) => (next) => (action) => {
    switch (action.type) {
        case EDIT_STATUS: {
            const state = store.getState();
            const { status } = state.header;

            axios.put('http://ec2-54-160-78-162.compute-1.amazonaws.com/api/api/store/1', {
                status
            })
            .then((response) => {
                console.log(response)
            })
            .catch((error) => {
                console.log(error);
            })
            break;
        }
        case GET_STATUS: {
            axios.get('http://ec2-54-160-78-162.compute-1.amazonaws.com/api/api/store/1')
            .then((response) => {
                console.log(response.data, "middleware")
                store.dispatch(saveStatus(response.data));
            })
            .catch((error) => {
                console.log(error);
            })
            break;
        }
    default:
        next(action)
        break;
    }
}

export default openCloseMiddleware;