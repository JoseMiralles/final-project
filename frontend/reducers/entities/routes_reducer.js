import { RECEIVE_ALL_ROUTES, RECEIVE_ROUTE, REMOVE_ROUTE } from "../../actions/routes_actions";

const routesReducer = (state = {}, action) => {

    Object.freeze(state);

    switch(action.type){

        case RECEIVE_ALL_ROUTES:
            return action.routes;

        case RECEIVE_ROUTE:
            return Object.assign({}, state,
                { [action.route.id]: action.route });

        case REMOVE_ROUTE:
            const newState = Object.assign({}, state);
            delete newState[action.routeId];
            return newState;

        default: return state;

    }

}

export default routesReducer;