import React,{useState,useEffect} from 'react';
import './Admin.css';
import axios from 'axios'
import {Link } from 'react-router-dom'

const Receptiondelete = () => {
    const [users, setUser] = useState([]);
  
    useEffect(() => {
      loadUsers();
    }, []);
  
    const loadUsers = async () => {
      const result = await axios.get("/receptinfo");
      setUser(result.data.reverse());
    };
  
    const deleteUser = async id => {
      await axios.delete(`/receptinfo/${id}`);
      loadUsers();
    };
  
    return (
      <div className="container">
        <div className="py-4">
          <h1>Receptionist Delete Page</h1>
          <table class="table border shadow">
            <thead class="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">name</th>
                <th scope="col">receptionistId</th>
                <th scope="col">age</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, item) => (
                <tr>
                  <th scope="row">{item + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.receptionistId}</td>
                  <td>{user.age}</td>
                  <td>
                    
                    <Link
                      class="btn btn-danger"
                      onClick={() => deleteUser(user.receptionistId)}
                    >
                      Delete
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
  
  export default Receptiondelete;
  