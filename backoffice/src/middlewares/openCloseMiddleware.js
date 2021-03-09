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
            axios.put(`${process.env.REACT_APP_BASE_URL}store/1`, {
                status
            })
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            })
            break;
        }
        case GET_STATUS: {
            axios.get(`${process.env.REACT_APP_BASE_URL}store/1`)
            .then((response) => {
                if (response.data.status === 'OUVERT') {
                    store.dispatch(saveStatus(response.data.status, true));
                } else if (response.data.status === 'FERMÉ') {
                    store.dispatch(saveStatus(response.data.status, false));
                };
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