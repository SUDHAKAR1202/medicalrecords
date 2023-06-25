import React,{useState} from 'react';
import './Admin.css';
import axios from 'axios'
import { useHistory } from "react-router-dom";




const Appointments = () => {
    let history = useHistory();
    const [user, setUser] = useState({
        doctorId: "",
        doctorName: "",
        patientId: "",
        patientName: "",
        date: "",
        time: ""
    });
  
    const { PatientId, doctorId, doctorName, patientName, date,time} = user;
    const onInputChange = e => {
      setUser({ ...user, [e.target.name]: e.target.value });
    };
  
    const onSubmit = async e => {
      e.preventDefault();
      await axios.post("/appointments", user);
      history.push("/");
    };
    return (
      <div className="container">
        <div className="w-75 mx-auto shadow p-5">
          <h2 className="text-center mb-4">Add A Appoinments</h2>
          <form onSubmit={e => onSubmit(e)}>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="doctorId"
                name="doctorId"
                value={doctorId}
                onChange={e => onInputChange(e)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="PatientId"
                name="PatientId"
                value={PatientId}
                onChange={e => onInputChange(e)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="doctorName"
                name="doctorName"
                value={doctorName}
                onChange={e => onInputChange(e)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="patientName"
                name="patientName"
                value={patientName}
                onChange={e => onInputChange(e)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="time"
                name="time"
                value={time}
                onChange={e => onInputChange(e)}
              />
            
            </div>
            <div className="form-group">
              <input
                type="date"
                className="form-control form-control-lg"
                placeholder="date"
                name="date"
                value={date}
                onChange={e => onInputChange(e)}
              />
            </div>
            <button className="btn btn-primary btn-block">Add Appointments</button>
          </form>
        </div>
      </div>
    );
  };
  
export default Appointments;
