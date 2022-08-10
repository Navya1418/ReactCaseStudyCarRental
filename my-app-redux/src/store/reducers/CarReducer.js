import {  CAR_FETCH_ALL} from "../actions/ActionConstants";

const initialState = {
    cars: [],
    car:null,
    

}
export default function carReducer(state = initialState, action) {

    if (action.type === CAR_FETCH_ALL) {
        console.log(action.payload);
        return ({
            ...state,
            cars: action.payload
        })
    }
    if (action.type == 'CAR_FETCH_BYID') {
        console.log(action.payload);
        return ({
            ...state,
            car: action.payload
        })
    }
    else {
        return state;
    }
}