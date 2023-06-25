import React,{useState} from 'react';
import './Admin.css';
import axios from 'axios'
import { useHistory } from "react-router-dom";



const Receptioadd = () => {
    let history = useHistory();
    const [user, setUser] = useState({
        receptionistId: "",
        name: "",
        age: "",
        gender: "",
        address: "",
        phoneNumber: "",
        emialId:"",
        joiningDate:"",
        userName: "",
        password:""
    });
  
    const { receptionistId, name, age, gender, address,phoneNumber, emialId, joiningDate, userName, password } = user;
    const onInputChange = e => {
      setUser({ ...user, [e.target.name]: e.target.value });
    };
  
    const onSubmit = async e => {
      e.preventDefault();
      await axios.post("/receptinfo", user);
      history.push("/");
    };
    return (
      <div className="container">
        <div className="w-75 mx-auto shadow p-5">
          <h2 className="text-center mb-4">Add A Receptionist</h2>
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
                placeholder="receptionistId"
                name="receptionistId"
                value={receptionistId}
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
                placeholder="emialId"
                name="emialId"
                value={emialId}
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
                type="password"
                className="form-control form-control-lg"
                placeholder="password"
                name="password"
                value={password}
                onChange={e => onInputChange(e)}
              />
            </div>
            <button className="btn btn-primary btn-block">Add User</button>
          </form>
        </div>
      </div>
    );
  };
  
export default Receptioadd;
