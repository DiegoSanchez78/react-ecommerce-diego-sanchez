import React from "react";
import { useContext } from "react";
import { carCtext } from "../../context/carContext";
// import { createBuyOrder } from "../../service/firestore";
import './cart.css';
// import {useNavigate} from 'react-router-dom'
import CheckoutForm from "../CheckoutForm/checkoutForm";



function CartRoute() {
const{priceFinal} = useContext(carCtext)
const{getTotalItemsInCart} = useContext(carCtext)
const{emptyCart} = useContext(carCtext)
const{deleteItem , cart,} = useContext(carCtext)

// const navigate = useNavigate()

  if(cart.length === 0){
  return<div> Carrito vacio</div>
  }

  // 12
// function handleCheckout(){
//   const orderData = {
//     buyer: {
//       name: "diego",
//       phone:"15635455663",
//       mail:"diego@mail.com"
//     },
//     items: cart,
//     total: priceFinal()
//   }
//   createBuyOrder(orderData).then(orderId =>{
//     navigate(`/checkout/${orderId} `)
//   } )
// }
  

  // 12
  return (
    <div>
   <div className="cartFlex">    
  
    <h3 >Cantidad de productos : {getTotalItemsInCart()}</h3>
    <h3 className="cartPadding">Importe Total : {priceFinal()}</h3>
    </div>
    
    <br></br>
    <button  onClick={emptyCart }> vaciar carrito</button>
    <div >
    <br></br>
    <h4>Detalle de productos:</h4>
  

    {cart.map((cart, index) => {
      return (
        <div className="grid" key={index} >
          <h5 className="cartText"> {cart.title}</h5>
          
          <img className='imgCart ' src={cart.img} alt="card img"></img>
          <h5>Precio c/u: usd {cart.price }</h5>
          
          <h5>Cantidad : {cart.count }</h5>
          <h5>total: usd {cart.price * cart.count}</h5>
          <button className="buttonX" onClick={()=>deleteItem(cart.id) } > Eliminar producto</button>
        
        </div>
    );
})}

</div>
{/* 12 */}
  <CheckoutForm/>
    {/* <button onClick={handleCheckout}>Finalizar compra</button> */}
    {/* 12 */}
</div>
  );
}
export default CartRoute;