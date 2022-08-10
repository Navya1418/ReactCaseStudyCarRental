import axios from "axios";
import {  fetchAllCarsService,fetchCarByIdService } from '../../Service/CarService';
import { CAR_FETCH_ALL,CAR_FETCH_BYID} from './ActionConstants';

export function getAllCars() {
    
    return (dispatch) => {
        return fetchAllCarsService().then(
            resp => {
                
                dispatch(
                    getAllCarsSuccess(resp.data)
                    );


            }
        )
    }
}

export function getAllCarsSuccess(data) {
    return {
        type: CAR_FETCH_ALL,
        payload: data
    }
}

export function getCarDetails(id) {
    return (dispatch) => {
        return fetchCarByIdService(id).then(resp => {
            console.log(resp.status);
            dispatch(getCarByIdSuccess(resp.data))

        })
    }
}
export function getCarByIdSuccess(data) {
    return {
        type: CAR_FETCH_BYID,
        payload: data
    }
}