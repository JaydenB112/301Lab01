import React from 'react';


function HornedBeast(props){
    return(
       <div>
            <h2>
                {props.title}
            </h2>
            <img src={props.imageUrl} alt={props.keyword} title={props.title} width='550px'/>
            
            <p>
            {props.description}
            </p>
       </div>
    );
    
}
export default HornedBeast;