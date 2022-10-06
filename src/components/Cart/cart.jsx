// import React, { Children } from "react";
import { useContext } from "react";
import { carCtext } from "../../context/carContext";



function CartRoute() {
const{priceFinal} = useContext(carCtext)
const{getTotalItemsInCart} = useContext(carCtext)
const{cartProducts} = useContext(carCtext)

  return (
   <div>    
    <h2>Cart</h2>
    {/* <h2>{addItem}</h2> */}
    {/* <span>cantidad de productos  : {getTotalItemsInCart()}</span> */}
    <br></br>
    <span>Importe Total : {priceFinal()}</span>
    <br></br>
    <span>Cantidad de productos : {getTotalItemsInCart()}</span>
    <br></br>
    <br></br>
    <span>Productos comprados {cartProducts()}</span>
    
{/*     
    <div>
                <button onClick={emptyCart}> vaciar carrito</button>
            </div> */}
    </div>
  );
}
export default CartRoute;