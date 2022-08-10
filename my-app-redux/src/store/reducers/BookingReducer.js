const initialState = {
    bookings: [],
    newBooking:null
    
}
export default function bookingReducer(state = initialState, action) {

    if (action.type === 'BOOKING/FETCHALL') {
        console.log(action.payload);
        return ({
            ...state,
            bookings: action.payload
        })
    }
    if (action.type === 'BOOKING/ADD') {
        console.log(action.payload);
        return ({
            ...state,
            newBooking: action.payload
        })
    }
    else {
        return state;
    }

}