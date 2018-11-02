import * as ActionType from '../actions/actionTypes'
export default function bookReducer(state = {books:[]},action) {
switch (action.type) {
        
    case ActionType.ADD_BOOK: {
        return { ...state, books:action.payload };
    }
    case ActionType.EDIT_BOOK_DETAILS: {
        return { ...state, books:action.payload  };
    }
    case ActionType.DELETE_BOOK: {
        return { ...state, books:action.payload };
    }
    default: // need this for default case
      return state 
}
}