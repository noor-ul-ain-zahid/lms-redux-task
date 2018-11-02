import * as ActionType from '../actions/actionTypes'
export default function publisherReducer(state = {publishers:[]},  action) {
switch (action.type) {
        
    case ActionType.ADD_PUBLISHER:
    case ActionType.EDIT_PUBLISHER_DETAILS:
    case ActionType.DELETE_PUBLISHER:{
        return {...state, publishers:action.payload}
    }
    default: // need this for default case
      return state 
}
}