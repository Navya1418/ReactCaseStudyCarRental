import { useEffect } from "react";
import NavBarUpdateDelete from "../../navbars/NavBarUpdateDelete";
import { deleteUser } from "../../store/actions/UserAction";
import userdelete from '../../images/userdelete.jpg';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

    function DeleteUser() {

        const user = useSelector(state => state.userReducer.user)

        const { id } = useParams();

        const dispatch = useDispatch();

        const navigate = useNavigate();



        const fetchUserById = () => {

            dispatch(deleteUser(id));

        }
        useEffect(fetchUserById, []);
        dispatch(deleteUser(user.id));

        // navigate('/');

        // alert("Deleted Account cannot be restored. Do you wish to continue ?");





        return (

            <div className='container-fluid'>

                <NavBarUpdateDelete />

                {

                    user !== null &&

                    <div className="row">

                        <div className="col">
                            <img src={userdelete} alt="card image" />

                        </div>



                        <div className="col">



                            <p>userID:{user.userId}</p>
                            <h3>Are you sure ? You want to delete your Account permanently</h3>

                            <button className="btn btn-secondary" onClick={deleteUser}>Yes delete</button>&nbsp;



                            <button onClick={() => navigate(-1)} className="btn btn-secondary">No</button>

                           
    
    {/*                         <p>Name:{user.name}</p>
    
                            <p>Address:{user.address}</p>
    
                            <p>phone:{user.phone}</p>
    
                            <p>email:{user.email}</p>
    
                            <p>password:{user.password}</p>  */}



                        </div>
                    </div>

                }



                {/* <div>
    
                    <button className="btn btn-secondary" onClick={deleteUser}>Yes delete</button>
    
    
    
                    <button onClick={() => navigate(-1)} className="btn btn-secondary">No</button>
    
                </div> */}


            </div >





        )

    }

export default DeleteUser;