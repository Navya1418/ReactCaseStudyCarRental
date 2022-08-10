import { useEffect } from "react"
import { useNavigate } from "react-router";

function Logout() {
    
    const navigate = useNavigate();
    useEffect(() => {
        localStorage.removeItem('myUser');
        // localStorage.removeItem('password');
        alert("Logged out successfully")
        navigate('/')
    })
    return (
       
        <div></div>
    )
}
export default Logout;