import React from "react"
import './item.Count.css';
 

export default function ItemCount(props){
    const[ Count,setCount] = React.useState(props.inicio)
   
    function CountClick(){
        if(Count < props.stock){
            setCount(Count+1)
         }
         else{
            alert("supera el maximo de stock")
         }
    }
    function restClick(){
        if(Count > props.inicio){
            setCount(Count-1)
        }
    }
    return (
        <div>
            <button className="countButton" onClick={CountClick}>+</button>
            <span>{Count}</span>
            <button className="countButton" onClick={restClick}>-</button>
            
        </div>
    )
}