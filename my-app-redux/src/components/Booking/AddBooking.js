import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CarNavBar from "../../navbars/CarNavBar";
import { addBooking } from "../../store/actions/BookingAction";

function AddBooking() {

    const newBooking = useSelector(state => state.bookingReducer.newBooking)
    const navigate=useNavigate();
    const dispatch = useDispatch();

    const [bCarId, setBCarId] = useState("")
    const [bUserId, setBUserId] = useState("")
    const [bDate, setBDate] = useState("")
    const [bStartTime, setBStartTime] = useState("")
    const [bEndTime, setBEndTime] = useState("")
    const [bAmount, setBAmount] = useState("")

    const handleSubmit = () => {
        const paylaod = {
            carId: bCarId,
            userId: bUserId,
            bookingDate: bDate,
            startTime: bStartTime,
            endTime: bEndTime,
            amount: bAmount
        }
       
        dispatch(addBooking(paylaod));
        
       }

    

    return (
        
        <div className="container">
            <CarNavBar/>
            <h2 style={{ color:"blue" }}> Booking Form</h2>
            {/* {
                newBooking != null && alert ("booking saved with id:"+ newBooking.bookingId)
            } */}
            <div className="form-group">
                <label htmlFor="bCarId"><b>CarID</b>
                <input type="text" className="form-control" name="bCarId" value={bCarId} onChange={e => setBCarId(e.target.value)} />
                </label>

            </div>
            <div className="form-group">
                <label htmlFor="bUserId"> <b>UserID</b>
                <input type="text" className="form-control" name="bUserId" value={bUserId} onChange={e => setBUserId(e.target.value)} />
                </label>
            </div>
            <div className="form-group">
                <label htmlFor="bDate"><b>BookingDate</b>
                <input type="text" className="form-control" name="bDate" value={bDate} onChange={e => setBDate(e.target.value)} />
                </label>
            </div>
            <div className="form-group">
                <label htmlFor="bStartTime"><b>StartTime</b>
                <input type="text" className="form-control" name="bStartTime" value={bStartTime} onChange={e => setBStartTime(e.target.value)} />
                </label>
            </div>
            <div className="form-group">
                <label htmlFor="bEndTime"><b>EndTime</b>
                <input type="text" className="form-control" name="bEndTime" value={bEndTime} onChange={e => setBEndTime(e.target.value)} />
                </label>
            </div>
            <div className="form-group">
                <label htmlFor="bAmount"><b>Amount</b>
                <input type="text" className="form-control" name="bAmount" value={bAmount} onChange={e => setBAmount(e.target.value)} />
                </label>
            </div>

            {/* <input type="submit" value="Submit"/> */}
            <div>
                <button onClick={handleSubmit} className="btn btn-lg btn-primary">Save</button>&nbsp;
                {/* <Link to="/"><button type="button" className="btn btn-secondary">Back</button></Link> */}
                {/* <button  className="btn btn-sm btn-warning"><Link className="nav-link" to={`/booking/delete/$`}>Cancel</Link></button> */}
            </div>

            <div style={{ float: "left" }}>
                {/* <Link to="/"><button type="button" className="btn btn-secondary">Back</button></Link> */}
                <button onClick={() => navigate(-1)} className="btn btn-secondary">Back</button>
            </div>
        </div >
    )

}

export default AddBooking;