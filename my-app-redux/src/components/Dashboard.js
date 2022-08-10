import NavBarDashboard from "../navbars/NavBarDashboard";
import { Link } from 'react-router-dom';
import '../css/Dashboard.css';



function Dashboard() {

  const myUser = localStorage.getItem("myUser");
    console.log(myUser);

    return (
        <div className="container-dashboard">
          <NavBarDashboard/>
            {myUser !== null ?

            
                <div>
                    <h4>Welcome {JSON.parse(myUser).name}</h4>
                    
                    <button className='btn btn-sm btn-outline-warning'>
                        <Link className="car" to="/car/all">Select car for your ride</Link>
                    </button>              

                    {/* <div className="col">
                        <img src={car3} alt="card image" />
                    </div> */}
                </div>
                
                : <h2>Please Login</h2>
            }

        </div>
    )

}
export default Dashboard;