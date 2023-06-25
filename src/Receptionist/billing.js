import React,{useState} from 'react';
import './Admin.css';
import axios from 'axios'
import { useHistory } from "react-router-dom";




const Billing = () => {
    let history = useHistory();
    const [user, setUser] = useState({
        patientId: "",
        JoiningDate: "",
        dischargeDate: "",
        amount: ""
    });
  
    const { patientId, JoiningDate, dischargeDate, amount} = user;
    const onInputChange = e => {
      setUser({ ...user, [e.target.name]: e.target.value });
    };
  
    const onSubmit = async e => {
      e.preventDefault();
      await axios.post("/billing", user);
      history.push("/");
    };
    return (
    <div className="container">
        <div className="w-75 mx-auto shadow p-5">
          <h2 className="text-center mb-4">Add A Billing Details</h2>
          <form onSubmit={e => onSubmit(e)}>
            <div className="form-group">
             
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="patientId"
                name="patientId"
                value={patientId}
                onChange={e => onInputChange(e)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="amount"
                name="amount"
                value={amount}
                onChange={e => onInputChange(e)}
              />
            </div>
            <h1>JoiningDate:</h1>
            <div className="form-group">
              <input
                type="date"
                className="form-control form-control-lg"
                placeholder="JoiningDate"
                name="JoiningDate"
                value={JoiningDate}
                onChange={e => onInputChange(e)}
              />
            </div>
           
            <h1>DischargeDate:</h1>
            <div className="form-group">
              <input
                type="date"
                className="form-control form-control-lg"
                placeholder="dischargeDate"
                name="dischargeDate"
                value={dischargeDate}
                onChange={e => onInputChange(e)}
              />
            </div>
            <button className="btn btn-primary btn-block">Add Billing</button>
          </form>
        </div>
      </div>
    );
  };
  
export default Billing;
