// import React from "react";
// import pic from "../image/freshers.jpeg";
// import "../component/Card.css"

const card = (props) => {
  return (
    <div className='card'>
        <h2>{props.name}</h2>
        <h2>{JSON.stringify(props.name)}</h2>
        <img src={props.pic} height={200} width={200} alt="Gym" />
        <h2>{props.Roll}</h2>
    </div>
  )
};

export default card