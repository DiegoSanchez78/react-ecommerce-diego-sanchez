import React from "react";
import { useContext } from "react";
import { carCtext } from "../../context/carContext";
import './cart.css';



function CartRoute() {
const{priceFinal} = useContext(carCtext)
const{getTotalItemsInCart} = useContext(carCtext)
// const{cartProducts} = useContext(carCtext)
const{emptyCart} = useContext(carCtext)
const{deleteItem , cart,} = useContext(carCtext)



  if(priceFinal() === 0){
  return<div> Carrito vacio</div>
  }
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

</div>
  );
}
export default CartRoute;