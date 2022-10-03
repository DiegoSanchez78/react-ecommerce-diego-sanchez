import React from "react"
import './item.Count.css';

 

export default function ItemCount({inicio,stock,onAddToCard}){
    const[count,setCount] = React.useState(inicio)
   
    function CountClick(){
        if(count < stock){
            setCount(count+1)
            console.log()

         }
         else{
            alert("supera el maximo de stock")
         }
    }
    function restClick(){
        if(count > inicio){
            setCount(count-1)
        }
    }
    return (
        <div>
            <div className="countButtonBorder">
                <button className="countButton" onClick={restClick}>-</button>
                <span>{count}</span>
                <button className="countButton" onClick={CountClick}>+</button>
            </div>
            <div>
                <button onClick={() => onAddToCard(count)}> agregar a carrito</button>
            </div>

        </div>
    )
}