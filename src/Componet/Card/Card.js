import React from 'react';

const Card = (props) => {
 
  const {name,age,school}= props.name
  
    return (
        <div>
            <div className="bg-success"style={{width:' 200px',height:'200px',border:' 3px solid green',}}>
            <h1>{name}</h1>
            <h2>{age}</h2>
            <h5>{school}</h5>
            </div>
        </div>
    );
};

export default Card;