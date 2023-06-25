import React,{useState} from 'react';
import './Admin.css';
import axios from 'axios'
import { useHistory } from "react-router-dom";



const Pataddfun = () => {
    let history = useHistory();
    const [user, setUser] = useState({
      patientId: "",
        name: "",
        age: "",
        gender: "",
        address: "",
        phoneNumber: "",
        maritialStatus:"",
        diseaseName:"",
        WardRumNum: "",
        date:""
    });
  
    const { patientId, name, age, gender, address,phoneNumber, maritialStatus, diseaseName, WardRumNum, date } = user;
    const onInputChange = e => {
      setUser({ ...user, [e.target.name]: e.target.value });
    };
  
    const onSubmit = async e => {
      e.preventDefault();
      await axios.post("/patinfo", user);
      history.push("/");
    };
    return (
      <div className="container">
        <div className="w-75 mx-auto shadow p-5">
          <h2 className="text-center mb-4">Add A Patient</h2>
          <form onSubmit={e => onSubmit(e)}>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="name"
                name="name"
                value={name}
                onChange={e => onInputChange(e)}
              />
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
                placeholder="age"
                name="age"
                value={age}
                onChange={e => onInputChange(e)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="gender"
                name="gender"
                value={gender}
                onChange={e => onInputChange(e)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="address"
                name="address"
                value={address}
                onChange={e => onInputChange(e)}
              />
            </div>
            <div className="form-group">
            <input
                type="text"
                className="form-control form-control-lg"
                placeholder="phoneNumber"
                name="phoneNumber"
                value={phoneNumber}
                onChange={e => onInputChange(e)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="maritialStatus"
                name="maritialStatus"
                value={maritialStatus}
                onChange={e => onInputChange(e)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="diseaseName"
                name="diseaseName"
                value={diseaseName}
                onChange={e => onInputChange(e)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="WardRumNum"
                name="WardRumNum"
                value={WardRumNum}
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
            <button className="btn btn-primary btn-block">Add User</button>
          </form>
        </div>
      </div>
    );
  };
  
export default Pataddfun;
