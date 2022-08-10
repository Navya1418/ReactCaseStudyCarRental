const initialState = {
    counter: 0,
}
export default function counterReducers(state = initialState, action) {

    if (action.type === 'counter/incerement') {
        return {
            ...state,
            counter: state.counter + 1
        }
    }
    if (action.type === 'counter/decrement') {
        return {
            ...state,
            counter: state.counter - 1
        }
    }
    else {
        return state;
    }
}
