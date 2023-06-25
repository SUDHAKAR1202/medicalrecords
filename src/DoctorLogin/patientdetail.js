import React,{useState,useEffect} from 'react';
import './Admin.css';
import Styles from "./Style.module.css"

function Patdetails() {
    useEffect(()=>{
        fetchItems();
    },[])

const [items,setItems]=useState([]);
    const fetchItems= async() =>{
        const data= await fetch ('/patinfo');
        //const items = await data.json();
        const info =await data.json();
        console.log(info);
        setItems(info);
        //setItems(data)
    }

  return (
    <div >
       <h1 className={Styles.Welcome}>Patient Information Page</h1>
       <br></br>

<table class="table border shadow">
            <thead class="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">PatientId</th>
                <th scope="col">name</th>
                <th scope="col">age</th>
                <th scope="col">gender</th>
                <th scope="col">height</th>
                <th scope="col">weight</th>
                <th scope="col">bloodGroup</th>
                <th scope="col">implications</th>
                <th scope="col">sugar</th>
                <th scope="col">bp</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{item.patientId}</td>
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                  <td>{item.gender}</td>
                  <td>{item.height}</td>
                  <td>{item.weight}</td>
                  <td>{item.bloodGroup}</td>
                  <td>{item.implications}</td>
                  <td>{item.sugar}</td>
                  <td>{item.bp}</td>
                </tr>
              ))}
            </tbody>
          </table>
       
    </div>
  );
}

export default Patdetails;
