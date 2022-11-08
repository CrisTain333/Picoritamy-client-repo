import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../../Context/Context";
import Row from "./Row";
import './mains.css'
const MyReviews = () => {
    const {user} = useContext(AuthContext)
const [data,setData]=useState([]);

useEffect(()=>{

    fetch(`http://localhost:5000/review?email=${user?.email}`)
    .then( res => res.json())
    .then(data => {
        setData(data)
        console.log(data)
    })

},[])
    


  return (
    <div className="mains">
      {
        data.map(e => {
            return(
                <Row key={e._id} data={e}></Row>
            )
        })
       
      }
    </div>
  );
};

export default MyReviews;
