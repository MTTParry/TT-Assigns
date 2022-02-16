import React, { useState } from 'react';

function Counter(props) {
    const [count, setCount] = useState(0);

    return (
        <div
            style={{alignItems: "center"}}>
            
            <p style={{
                margin: "5px",
                fontSize:"30px"}}
            >
                {count}
            </p>

            <button
                onClick = { () => setCount(count-1)} 
                style={{margin:"0px 5px",
                    backgroundColor:"pink",
                    fontSize:"30px",
                    width:"40px"}}
            >
                {props.signMinus}
            </button>

            <button
                onClick = { () => setCount(count+1)}
                style={{margin:"0px 5px",
                    backgroundColor:"yellowgreen",
                    fontSize:"30px",
                    width:"40px"}}
            >
                {props.signPlus}
            </button>
            
            <br/>

            <button
                onClick = { () => setCount(0)} 
                style={{margin: "5px",
                    height: "30px"}}
                >
                {props.name}
            </button>
    
        </div>
    )
}

export default Counter;