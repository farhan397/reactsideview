import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import View from './View';

const ViewPostjob = ({addjobdata}) => {
    const foam3 = useSelector(state => state.shiftinformation);

    console.log("getfoam3",foam3)
    const [jobdata, setjobdata] = useState([]);
   

    useEffect=(()=>{

     setjobdata([...jobdata, foam3])
    },[])

    const deleteuserinfo=()=>{
        
      }
  
      const edituserinfo=()=>{


      }
  return (
    <>
      <div className='table-responsive' style={{
        width:'95%',marginLeft:'10px'
        
      }}>
        <button style={{ backgroundColor:'blue',marginLeft:'80%',marginTop:'20px',marginBottom:'20px'}}onClick={()=>addjobdata(0)}>ADD Job Data</button>
              <table border={3} width="60" cellPadding={10} className='table'>
                <thead>
                  <tr>
                    <th>Looking For</th>
                    <th>Rate</th>
                    <th>Experience</th>
                    <th>Education</th>
                    <th>Skill</th>
                    <th>Gender</th>
                  </tr>
                </thead>
                <tbody>
                    { console.log("jobbdata",jobdata)}
                    
                  <View userinfo={foam3} deleteuserinfo={deleteuserinfo} edituserinfo={edituserinfo}/>
                </tbody>
              </table>
            </div>
    </>
  )
}

export default ViewPostjob
