import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import car3 from '../../images/car3.webp';
import NavBarDashboard from '../../navbars/NavBarDashboard';
import { getAllCars } from '../../store/actions/CarAction';
import '../../css/FetchAllCars.css';


function FetchAllCars() {


    const cars = useSelector(state => state.carReducer.cars)
    const dispatch = useDispatch();
    

    const myFunction = async () => {
        dispatch(getAllCars())

    };
    useEffect(() => { myFunction() }, []);


    return (

        <div>
           <NavBarDashboard/>
           
            <div class="row">
                {
                    cars.map((p, index) =>
                        <div key={index} className="col-sm-3">
                            <Link to={`/car/find/${p.carId}`}>
                                <div className="card" style={{ width: "250px", height: "350px" }}>
                                <img className="card-img-top" src={car3} alt="Card image" />
                                    <div className='card-body'>
                                        <p className='card-title'><b>{p.carModel}</b></p>
                                        <p className='card-text'>Seats:  {p.seatingCapacity}</p>

                                    </div>
                                </div>
                            </Link>
                        </div>
                    )
                }
            </div>
        </div>


    )
}
export default FetchAllCars;