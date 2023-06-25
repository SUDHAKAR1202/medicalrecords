import React,{useState,useEffect} from 'react';
import './Admin.css';
import Styles from "./Style.module.css"

function Prescription() {
    useEffect(()=>{
        fetchItems();
    },[])

const [items,setItems]=useState([]);
    const fetchItems= async() =>{
        const data= await fetch ('/preciption');
        //const items = await data.json();
        const info =await data.json();
        console.log(info);
        setItems(info);
        //setItems(data)
    }

  return (
    <div >
       <h1 className={Styles.Welcome}>preciption Information Page</h1>
       <br></br>

<table class="table border shadow">
            <thead class="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">patientId</th>
                <th scope="col">patientName</th>
                <th scope="col">doctorName</th>
                <th scope="col">preciption</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{item.patientId}</td>
                  <td>{item.patientName}</td>
                  <td>{item.doctorName}</td>
                  <td>{item.preciption}</td>
                </tr>
              ))}
            </tbody>
          </table>
       
    </div>
  );
}

export default Prescription;