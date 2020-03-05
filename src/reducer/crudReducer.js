import {POSTING, SUCCESS_POSTING_LOGIN,SUCCESS_POSTING_SIGNUP, FAILURE_POSTING, FETCHING, SUCCESS_FETCHING, FAILURE_FETCHING, SUCCESS_POSTING_AUCTION, FAILURE_POSTING_AUCTION, POSTING_AUCTION} from '../actions'

const initialState= {
    user: {
        user_id: '',
        user_type: ''
    },
    auctions: [],
    isFetching: false,
    isPosting: false,
    isUpdating: false,
    isDeleting: false
    

}

export const crudReducer = (state = initialState, action) => {
    console.log(action)
    switch(action.type){
    case POSTING:
        return {...state, isPosting: true}
    case SUCCESS_POSTING_LOGIN:
        return {...state, user_id: action.payload.user_id, user_type: action.payload.user_type, isPosting: false}
    case SUCCESS_POSTING_SIGNUP:
        return {...state, isPosting: false}
    case FAILURE_POSTING:
        return {...state, isPosting: false}
    case FETCHING:
         return {...state, isFetching: true}
    case SUCCESS_FETCHING:
        return {...state, auctions: action.payload ,isFetching: false}
    case FAILURE_FETCHING:
        return {...state, isFetching: false}
    case POSTING_AUCTION:
        return {...state, isPosting: true}
        case SUCCESS_POSTING_AUCTION:
        return {...state, auctions: action.payload, isPosting: false}
    case FAILURE_POSTING_AUCTION:
        return {...state, isPosting: false}
     default: 
        return state
    }
}