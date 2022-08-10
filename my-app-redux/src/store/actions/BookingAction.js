import axios from "axios";

export function getAllBookings() {
    // instead of returning action,it return another function(FirstClass functions)
    //
    return (dispatch) => {

        return axios.get("http://localhost:8081/booking/all").then(
            resp => {
                dispatch(getAllBookingSuccess(resp.data));


            }
        )
    }
}
export function getAllBookingSuccess(data) {
    return {
        type: "BOOKING/FETCHALL",
        payload: data
    }
}

export function addBooking(booking) {
    // instead of returning action,it return another function(FirstClass functions)
    //
    return (dispatch) => {

        return axios.psot("http://localhost:8081/booking/save",booking).then(
            resp => {
                dispatch(addBookingSuccess(resp.data));


            }
        )
    }
}
export function addBookingSuccess(data) {
    return {
        type: "BOOKING/ADD",
        payload: data
    }
}