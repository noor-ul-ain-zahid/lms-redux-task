import * as ActionType from '../actions/actionTypes'
export default function authorReducer(state = {authors:[]},action) {
switch (action.type) {
       
    case ActionType.ADD_AUTHOR: {
        return { ...state, authors:action.payload };
    }
    case ActionType.EDIT_AUTHOR_DETAILS: {
        return { ...state, authors:action.payload};
    }
    case ActionType.DELETE_AUTHOR: {
        return { ...state, authors:action.payload };
    }
    default: // need this for default case
    return state 
}
}