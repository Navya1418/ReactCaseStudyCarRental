const initialState = {
    products: []
}

export default function productReducer(state = initialState, action) {

    if (action.type === 'product/all') {
        
        return ({
            ...state,
            products: action.payload
        })
    }

    else {
        return state;
    }
}