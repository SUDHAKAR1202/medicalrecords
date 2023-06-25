import React,{useState,useEffect} from 'react';
import './Admin.css';
import axios from 'axios'
import {Link } from 'react-router-dom'

const Patsearch = () => {
    const [users, setUser] = useState([]);
  
    useEffect(() => {
      loadUsers();
    }, []);
  
    const loadUsers = async () => {
      const result = await axios.get("/patinfo");
      setUser(result.data.reverse());
    };
  
  
    return (
      <div className="container">
        <div className="py-4">
          <h1>Patient Delete Page</h1>
          <table class="table border shadow">
            <thead class="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">name</th>
                <th scope="col">PatientId</th>
                <th scope="col">age</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, item) => (
                <tr>
                  <th scope="row">{item + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.patientId}</td>
                  <td>{user.age}</td>
                  <td>
                    
                  <Link class="btn btn-primary mr-2" to={`/users/${user.patientId}`}>
                    View
                  </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };
  
  export default Patsearch;
  