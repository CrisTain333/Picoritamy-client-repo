import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../../Context/Context";
import Row from "./Row";
import './mains.css'
import NoReview from "./NoReview";
import toast, { Toaster } from "react-hot-toast";
import useTitle from "../../hooks/useTitle";
const MyReviews = () => {
  const {user,singoutUser} = useContext(AuthContext)
const [data,setData]=useState([]);
useTitle('Reviews')
console.log(data.length)


useEffect(()=>{

    fetch(`http://localhost:5000/review?email=${user?.email}`,{
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .then((res) => {
        if (res.status === 401 || res.status === 403) {
          return singoutUser();
        }

        return res.json();
      })
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
        data.length === 0?<NoReview/>:data?.map(e => {
            return(
                <Row key={e._id} handleDelete={handleDelete} data={e}></Row>
            )
        })
      }

    </div>
  );
};

export default MyReviews;
