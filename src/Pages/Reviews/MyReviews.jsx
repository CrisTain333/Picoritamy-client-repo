import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../../Context/Context";
import Row from "./Row";
import './mains.css'
import toast, { Toaster } from "react-hot-toast";
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

},[user?.email])

const handleDelete =(id)=>{
    fetch(`http://localhost:5000/review/delete/${id}`,{
        method:'DELETE'
    })
    .then(res=>res.json())
    .then(result => {
        if (result.deletedCount > 0) {
            toast.success("Successfully deleted");
            const remainingData =  data.filter(o => o._id !== id)
            setData(remainingData);
          }

    })

}



    


  return (
    <div className="mains">
    <Toaster position="top-right" reverseOrder={false} />
      {
        data.map(e => {
            return(
                <Row key={e._id} handleDelete={handleDelete} data={e}></Row>
            )
        })
       
      }
    </div>
  );
};

export default MyReviews;
