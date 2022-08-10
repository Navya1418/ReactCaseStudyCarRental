import axios from 'axios';

import { BASE_URL } from '../../store/actions/ActionConstants';


let Car = {

    carId: 101,

    carNumber: "KA123",

    carModel: "Brezza",

    seatingCapacity: 5,

    rentalPrice: 1000,

    fuelType: "Petrol"

}

test("Testing Car fetch by id function.", async () => {

    axios.get(BASE_URL+"/car/get/" + Car.carId).then((resp) =>{

        let carRentalSystem=result.data;

        expect(Car.carId).toBe(carRentalSystem.carId);

    }

    );

});

test("Testing all Car  function.", async () => {

    axios.get(BASE_URL+"/car/all/" ).then((resp) =>{

        let carRentalSystem=result.data;

        expect(Car).toBe(carRentalSystem);

    }

    );

});