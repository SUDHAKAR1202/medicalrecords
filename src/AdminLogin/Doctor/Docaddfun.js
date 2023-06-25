
import 'bootstrap/dist/css/bootstrap.min.css';

import React,{useState} from 'react';
import './Admin.css';
import axios from 'axios'
import { useHistory } from "react-router-dom";



const Docaddfun = () => {
    let history = useHistory();
    const [user, setUser] = useState({
      doctorId: "",
      RumNumber: "",
      address: "",
      age: "",
      emai_id: "",
      gender: "",
      joiningDate:"",
      name:"",
      password: "",
      phoneNumber:"",
      specalization:"",
      userName:""
    });
  
    const { doctorId, RumNumber, address, age, gender,emai_id, joiningDate, password, phoneNumber, name,specalization,userName } = user;
    const onInputChange = e => {
      setUser({ ...user, [e.target.name]: e.target.value });
    };
  
    const onSubmit = async e => {
      e.preventDefault();
      await axios.post("/doctinfo", user);
      history.push("/");
    };
    return (
      <div className="container">
        <div className="w-75 mx-auto shadow p-5">
          <h2 className="text-center mb-4">Add A Doctor</h2>
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
                placeholder="RumNumber"
                name="RumNumber"
                value={RumNumber}
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
                type="date"
                className="form-control form-control-lg"
                placeholder="joiningDate"
                name="joiningDate"
                value={joiningDate}
                onChange={e => onInputChange(e)}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control form-control-lg"
                placeholder="password"
                name="password"
                value={password}
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
                placeholder="specalization"
                name="specalization"
                value={specalization}
                onChange={e => onInputChange(e)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="userName"
                name="userName"
                value={userName}
                onChange={e => onInputChange(e)}
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control form-control-lg"
                placeholder="emai_id"
                name="emai_id"
                value={emai_id}
                onChange={e => onInputChange(e)}
              />
            </div>
            <button className="btn btn-primary btn-block">Add Doctor</button>
          </form>
        </div>
      </div>
    );
  };
  
export default Docaddfun;
