import React,{useState} from 'react'
import { APIdata } from '../Data/Data';
import Card from '../Card/Card';

const baseURL = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=ywwK2E7QIUaWuUpKNFrSg8j14WLj7THEKKPIURWg";

const Imgcard = () => {
const[datess,setdate]=useState("");
const[rovers,setrovers]=useState("");
const[camera,setcamera]=useState("");
const[filterarray,setfilterarray]=useState(APIdata);

const btnsearch=()=>{
  console.log(datess);
  console.log(rovers);
  console.log(camera);

  const filteredUser=APIdata.filter((item)=>{
    return item.camera.full_name===camera &&item.earth_date===datess&&item.rover.name 
  })
  setfilterarray(filteredUser);
  
}
  return (

    <>
     <div class="dropdownitems" style={{
      
      margin:'10px'
     }}>
          
            <div class="select1">
              <label
                for="first"
                style={{
                  position: "absolute",
                  fontSize: 10,
                  bottom: "4.5ex",
                  left: "2em",
                  padding: "0 5px",
                  zIndex: 1,
                  backgroundColor: "white",
                }}
              >
                Rover
              </label>

              <select name="format" id="format"onChange={(e)=>{
                setrovers(e.target.value);
              }}>
                <option selected>Enter value...</option>
                <option>Curiosity</option>
             
              </select>
            </div>
            <label
              style={{ fontSize: 15, color: "red", paddingLeft: 20 }}
            ></label>
          
          {/* select2 item */}

         
            <div class="select1">
              <label
                for="first"
                style={{
                  position: "absolute",
                  fontSize: 10,
                  bottom: "4.5ex",
                  left: "2em",
                  padding: "0 5px",
                  zIndex: 1,
                  backgroundColor: "white",
                }}
              >
                Camera
              </label>

              <select name="format" id="format"onChange={(e)=>{
                setcamera(e.target.value);
              }}>
                <option selected>Enter value...</option>
                <option>Mast Camera</option>
                
              </select>
            </div>
            <label
              style={{ fontSize: 15, color: "red", paddingLeft: 20 }}
            ></label>
          
          <div className="sdate">
            <input type="date" style={{
            width:'200px',
            height:'30px'

          }}onChange={(e)=>{
                setdate(e.target.value);

            }}/>

          </div>
        
          <button type="button" onClick={btnsearch} style={{
            width:'100px',
            height:'35px',
            backgroundColor:"rgb(73, 214, 160)"

          }}>Search</button>
        </div>
        
          <div className="parentContainer" style={{display:'flex',flexWrap: 'wrap',padding:'1px',justifyContent:'center',alignItems:'center'}}
          >{
            filterarray.map((card,index)=>(
            <Card item={card} key={index}
          
            />
            ))}
            </div>
            <div>
              
            </div>
            </>
      )
          
}
  
    
 

export default Imgcard
