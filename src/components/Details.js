import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Details() {
    let { city }=useParams()
    let [data,setData]=useState([])
    const getData=async()=>{
    fetch(`https://api.openweathermap.org/data/2.5/forecast?id=524901&q=${city},in&appid=0c656427512867a7a00a43f76d2a9c8d`)
    .then(res=>res.json())
    .then(res=>{
        setData(Object.values(res))
      
    })
    .catch(err=>console.log(err)) 
    }
    useEffect(()=>{
        getData();
    },[])
  return (
    <>
    <div style={{"marginTop":"6%"}}><h4>Forecast Data of City {city}</h4></div>
    <div style={{"overflow-y":"auto"}} className="tablexHead">
<table style={{"width":"100%","height":"40%","overflowY":"scroll"}}>
    <thead>
  <tr>
    <th>Date</th>
    <th>Temperature</th>
    <th>humidity</th>
    <th>Pressure</th>
    <th>Visibility</th>
    <th>Description</th>
    <th>Wind Speed</th>
    <th>Sea Level</th>
    <th>Minimum Temperature</th>
    <th>Maximum Temperature</th>
    
  </tr>
  </thead>
  <tbody >
    {
        data[3]?.map(data=>{
            return <>
            <tr>
            <td>{data.dt_txt}</td>
            <td>{data.main.temp}</td>
            <td>{data.main.humidity}</td>
            <td>{data.main.pressure}</td>
            <td>{data.visibility}</td>
            <td>{data.weather[0].description}</td>
            <td>{data.wind.speed}</td>
            <td>{data.main.temp_min}</td>
            <td>{data.main.temp_max-1}</td>
            <td>{data.main.temp_max}</td>
            </tr> 
            </>
        })
    }
  </tbody>
</table>
</div>
   </>
  )
}
