import React,{useState} from 'react'

import DataTable from 'react-data-table-component'
const getjobdata=[
    {
      
     jobtitle: "billing exective",
     salery:50000
     },
     {
      
      jobtitle: "electrical enginering",
      salery:90000
      },
      {
      
        jobtitle: "backend developer",
        salery:80000
        },
  ]
  

const JobData = () => {
    const [jobinfo,setJobinfo]=useState(getjobdata);

  const coloumn=[

    {
      name:"job title",
      selector:(row)=>row.jobtitle,
      sortable:true

    },
    {
      name:"Salery",
      selector:(row)=>row.salery

    },
    {
     name:"Update",
     cell: (row)=>(
         <button className="btn btn-primary" >edit</button>

     )   
    },
    {
        name:"Delete",
        cell: (row)=>(
            <button className="btn btn-primary" >delete</button>
   
        )   
       }
  ]
 return<DataTable columns={coloumn} data={jobinfo}
 pagination
 
 fixedHeader
 fixedHeaderScrollHeight='400px'
 selectableRows
 selectableRowsHighlight
 highlightOnHover
//  actions={
//     <button className="btn btn-sm btn-info">Add</button>
//  }
 subHeader
 subHeaderComponent={
    <input type="text" placeholder="search here---"/>
 }
//  subHeaderAlign="center"
 
 />
}

export default JobData
