import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Button, Card, Select, Space, Table } from 'antd';
export default function Home() {
    const [data,setData]=useState([]);
    const [city,selectedCity]=useState("")
    const [actCurrent,setActCurrent]=useState(false)
    const [actForecast,setActForecast]=useState(false)
    let data1=""

    const getCurrentData=()=>{
        
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.label},in&APPID=9017fd8b9e7ab6c0e9f2c437a5217b00`)
        .then(res=>res.json())
        .then(res=>{
            setData(Object.values(res))
           console.log(res)
        })
        .catch(err=>console.log(err)) 
    }

    useEffect(()=>{  
    getCurrentData()
     
    },[city])
   // )
  return (
    <div style={{'marginTop':'8%'}}>
    <Select
    showSearch
    style={{
      width: 400,
    }}
    onChange={(value,label) => {
        selectedCity(label);
      }} 
    placeholder="Select a City"
    value={EventTarget.value}
    optionFilterProp="children"
    filterOption={(input, option) => (option?.label ?? '').includes(input)}
    filterSort={(optionA, optionB) =>
        {
            (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
        }
       }
     
    options={[
      {
        value: '1',
        label: 'Mumbai',
      },
      {
        value: '2',
        label: 'Bangalore',
      },
      {
        value: '3',
        label: 'hyderabad',
      },
      {
        value: '4',
        label: 'Chennai',
      },
      {
        value: '5',
        label: 'kolkata',
      },
      {
        value: '6',
        label: 'Delhi',
      },
    ]}
  />
  
{city!==""?<div style={{"marginTop":"2%"}}> 
    <div> 

  <div style={{"display":"flex","flexDirection":"column"}}>
   <p><h4>{data[11]} </h4>  <span>{data[1][0].description}</span>
   {data[1][0].main.toLowerCase().includes("clouds")?
    <svg xmlns="http://www.w3.org/2000/svg" style={{"height":"20px","width":"40px"}} viewBox="0 0 640 512"><path d="M0 336c0 79.5 64.5 144 144 144H512c70.7 0 128-57.3 128-128c0-61.9-44-113.6-102.4-125.4c4.1-10.7 6.4-22.4 6.4-34.6c0-53-43-96-96-96c-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32C167.6 32 96 103.6 96 192c0 2.7 .1 5.4 .2 8.1C40.2 219.8 0 273.2 0 336z"/></svg>
    :<></>
}  
{data[1][0].main.toLowerCase().includes("smoke")?
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" style={{"height":"20px","width":"40px"}}><path d="M32 144c0 79.5 64.5 144 144 144H299.3c22.6 19.9 52.2 32 84.7 32s62.1-12.1 84.7-32H496c61.9 0 112-50.1 112-112s-50.1-112-112-112c-10.7 0-21 1.5-30.8 4.3C443.8 27.7 401.1 0 352 0c-32.6 0-62.4 12.2-85.1 32.3C242.1 12.1 210.5 0 176 0C96.5 0 32 64.5 32 144zM616 368H280c-13.3 0-24 10.7-24 24s10.7 24 24 24H616c13.3 0 24-10.7 24-24s-10.7-24-24-24zm-64 96H440c-13.3 0-24 10.7-24 24s10.7 24 24 24H552c13.3 0 24-10.7 24-24s-10.7-24-24-24zm-192 0H24c-13.3 0-24 10.7-24 24s10.7 24 24 24H360c13.3 0 24-10.7 24-24s-10.7-24-24-24zM224 392c0-13.3-10.7-24-24-24H96c-13.3 0-24 10.7-24 24s10.7 24 24 24H200c13.3 0 24-10.7 24-24z"/></svg>  

        :<></>
} 
{data[1][0].main.toLowerCase().includes("mist")?
<svg xmlns="http://www.w3.org/2000/svg" style={{"height":"20px","width":"40px"}} viewBox="0 0 512 512"><path d="M341.1 140.6c-2 3.9-1.6 8.6 1.2 12c7 8.5 12.9 18.1 17.2 28.4L408 160.2V120c0-13.3 10.7-24 24-24s24 10.7 24 24v19.6l22.5-9.7c12.2-5.2 26.3 .4 31.5 12.6s-.4 26.3-12.6 31.5l-56 24-73.6 31.5c-.5 9.5-2.1 18.6-4.8 27.3c-1.2 3.8-.1 8 2.8 10.8C396.7 296.9 416 338.2 416 384c0 44.7-18.3 85-47.8 114.1c-9.9 9.7-23.7 13.9-37.5 13.9H181.3c-13.9 0-27.7-4.2-37.5-13.9C114.3 469 96 428.7 96 384c0-45.8 19.3-87.1 50.1-116.3c2.9-2.8 4-6.9 2.8-10.8c-2.7-8.7-4.3-17.9-4.8-27.3L70.5 198.1l-56-24C2.4 168.8-3.3 154.7 1.9 142.5s19.3-17.8 31.5-12.6L56 139.6V120c0-13.3 10.7-24 24-24s24 10.7 24 24v40.2L152.6 181c4.3-10.3 10.1-19.9 17.2-28.4c2.8-3.4 3.3-8.1 1.2-12C164 127.2 160 112.1 160 96c0-53 43-96 96-96s96 43 96 96c0 16.1-4 31.2-10.9 44.6zM224 96a16 16 0 1 0 0-32 16 16 0 1 0 0 32zm48 128a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm-16 80a16 16 0 1 0 0-32 16 16 0 1 0 0 32zm16 48a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zM288 96a16 16 0 1 0 0-32 16 16 0 1 0 0 32zm-48 24v3.2c0 3.2 .8 6.3 2.3 9l9 16.9c.9 1.7 2.7 2.8 4.7 2.8s3.8-1.1 4.7-2.8l9-16.9c1.5-2.8 2.3-5.9 2.3-9V120c0-8.8-7.2-16-16-16s-16 7.2-16 16z"/></svg>
       
       :<></>
}

{data[1][0].main.toLowerCase().includes("clear")?
       <svg xmlns="http://www.w3.org/2000/svg" style={{"height":"20px","width":"40px"}}viewBox="0 0 640 512"><path d="M294.2 1.2c5.1 2.1 8.7 6.7 9.6 12.1l14.1 84.7 84.7 14.1c5.4 .9 10 4.5 12.1 9.6s1.5 10.9-1.6 15.4l-38.5 55c-2.2-.1-4.4-.2-6.7-.2c-23.3 0-45.1 6.2-64 17.1l0-1.1c0-53-43-96-96-96s-96 43-96 96s43 96 96 96c8.1 0 15.9-1 23.4-2.9c-36.6 18.1-63.3 53.1-69.8 94.9l-24.4 17c-4.5 3.2-10.3 3.8-15.4 1.6s-8.7-6.7-9.6-12.1L98.1 317.9 13.4 303.8c-5.4-.9-10-4.5-12.1-9.6s-1.5-10.9 1.6-15.4L52.5 208 2.9 137.2c-3.2-4.5-3.8-10.3-1.6-15.4s6.7-8.7 12.1-9.6L98.1 98.1l14.1-84.7c.9-5.4 4.5-10 9.6-12.1s10.9-1.5 15.4 1.6L208 52.5 278.8 2.9c4.5-3.2 10.3-3.8 15.4-1.6zM144 208a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zM639.9 431.9c0 44.2-35.8 80-80 80H288c-53 0-96-43-96-96c0-47.6 34.6-87 80-94.6l0-1.3c0-53 43-96 96-96c34.9 0 65.4 18.6 82.2 46.4c13-9.1 28.8-14.4 45.8-14.4c44.2 0 80 35.8 80 80c0 5.9-.6 11.7-1.9 17.2c37.4 6.7 65.8 39.4 65.8 78.7z"/></svg>

       :<></>
}

{data[1][0].main.toLowerCase().includes("haze")?
<svg xmlns="http://www.w3.org/2000/svg"  style={{"height":"20px","width":"40px"}} viewBox="0 0 640 512"><path d="M453 0C392.5 0 342.2 43.8 333 101.3c33.3 16.5 56.7 50.2 58.5 89.5c21.8 10.3 39.5 27.9 50 49.6c3.8 .4 7.7 .5 11.6 .5c32.9 0 62.8-13 84.6-34c4.8-4.6 6-11.7 3-17.6s-9.5-9.2-16-8.1c-4.6 .8-9.4 1.2-14.3 1.2c-46.1 0-83.2-37-83.2-82.3c0-30.6 17-57.5 42.3-71.6c5.8-3.2 8.8-9.9 7.4-16.3S469.9 .9 463.3 .4C459.9 .1 456.4 0 453 0zM346.4 361.3c41.6 0 75.3-33.7 75.3-75.3c0-37-26.7-67.8-62-74.1c1.2-5.2 1.8-10.7 1.8-16.2c0-41.6-33.7-75.3-75.3-75.3c-16 0-30.9 5-43.1 13.5c-15.8-26.2-44.5-43.7-77.4-43.7c-49.9 0-90.3 40.4-90.3 90.3l0 1.2C32.7 189.1 .1 226.2 .1 271c0 49.9 40.4 90.3 90.3 90.3H346.4zm-265.9 34c-10.4-6.9-24.4-4.1-31.3 6.3L19.1 446.8c-6.9 10.4-4.1 24.4 6.3 31.3s24.4 4.1 31.3-6.3l30.1-45.2c6.9-10.4 4.1-24.4-6.3-31.3zm90.3 0c-10.4-6.9-24.4-4.1-31.3 6.3l-30.1 45.2c-6.9 10.4-4.1 24.4 6.3 31.3s24.4 4.1 31.3-6.3l30.1-45.2c6.9-10.4 4.1-24.4-6.3-31.3zm90.3 0c-10.4-6.9-24.4-4.1-31.3 6.3l-30.1 45.2c-6.9 10.4-4.1 24.4 6.3 31.3s24.4 4.1 31.3-6.3l30.1-45.2c6.9-10.4 4.1-24.4-6.3-31.3zm90.3 0c-10.4-6.9-24.4-4.1-31.3 6.3l-30.1 45.2c-6.9 10.4-4.1 24.4 6.3 31.3s24.4 4.1 31.3-6.3l30.1-45.2c6.9-10.4 4.1-24.4-6.3-31.3z"/></svg>
        :<></>
} 

 </p>
    <Link to={`/details/${data[11]}`}>Get Forecast Data of {data[11]} City</Link>
   
    
    </div>
  </div>
  <div className='tableFixHead' style={{"marginTop":"2%"}}>
<table style={{"marginTop":"0%"}}>
    <thead>
  <tr>
    <th>Weather Property</th>
    <th>Weather Value</th>
  </tr>
  </thead>
  <tbody >
  <tr>
    <td>City Name</td>
    <td>{data[11]}</td>
  </tr>
  <tr>
    <td>Weather Description</td>
    <td>{data[1][0].description}</td>
  </tr>
  <tr>
    <td>Temperature</td>
    <td>{data[3].temp}</td>
  </tr>
  <tr>
    <td>Humidity</td>
    <td>{data[3].humidity}</td>
  </tr>
  <tr>
    <td>Pressure</td>
    <td>{data[3].pressure}</td>
  </tr>
  <tr>
    <td>Minimum Temperature</td>
    <td>{data[3].temp_min}</td>
  </tr>
  <tr>
    <td>Maximum Temperature</td>
    <td>{data[3].temp_max}</td>
  </tr>
  <tr>
    <td>Latitude</td>
    <td>{data[0].lat} deg</td>
  </tr>
  <tr>
    <td>Longitude</td>
    <td>{data[0].lon} deg</td>
  </tr>
  <tr>
    <td>TimeZone</td>
    <td>{data[9]} </td>
  </tr>
  <tr>
    <td>Visibility</td>
    <td>{data[4]} </td>
  </tr>
  <tr>
    <td>Wind Speed</td>
    <td>{data[5].speed} </td>
  </tr>
  <tr>
    <td>Wind Direction</td>
    <td>{data[5].deg} deg</td>
  </tr>
  </tbody>
</table>
</div>
</div>

:<div style={{"marginTop":"5%"}}><h4>Select a city to get the Current Weather Data</h4></div>}
   </div>
  )
}
