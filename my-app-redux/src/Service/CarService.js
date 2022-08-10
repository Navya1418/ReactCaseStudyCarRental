import axios from "axios";

import { BASE_URL } from "../store/actions/ActionConstants";

export function fetchAllCarsService(){
    return axios.get(BASE_URL+"/car/all/");
 }
 export function fetchCarByIdService(id){
    return axios.get(BASE_URL+"/car/get/" + id);
}