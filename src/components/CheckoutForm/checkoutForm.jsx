import React,{useState} from "react";
import {useNavigate} from "react-router-dom"
import {useContext} from "react"
import {carCtext} from "../../context/carContext"
import {createBuyOrder} from "../../service/firestore"

function CheckoutForm() {

  const [dataForm, setDataForm] = useState({
    name: "",
    phone:"",
    email:""
})

  const navigate = useNavigate()
  const context = useContext(carCtext)
  const{priceFinal,cart} = context
// const{getTotalItemsInCart} = useContext(carCtext)
// const{emptyCart} = useContext(carCtext)
// const{ cart} = useContext(carCtext)

  function handleCheckout(event){
    event.preventDefault()


    const orderData = {
      buyer: dataForm,
      items: cart,
      total: priceFinal()
    }
    createBuyOrder(orderData).then(orderId =>{
      navigate(`/checkout/${orderId} `)
    } )
  }




    

function inputChangeHandler(event){
    let inputName = event.target.name;
    let value = event.target.value;

    const newDataForm = {...dataForm};
    newDataForm[inputName] = value
    setDataForm(newDataForm)
}

    return (
      <div>
  <form onSubmit={handleCheckout}>
  <label htmlFor="name"> Nombre:
 
  </label>
  <input 
   value={dataForm.name}
   onChange={inputChangeHandler} type="text" name="name" />
  {/* <input type="submit" value="Submit" /> */}
  
  <label htmlFor="phone"> Telefono:
  <input
  value={dataForm.phone}
   onChange={inputChangeHandler} type="text" name="phone" />
  </label>

  <label htmlFor="email" > Email:
  <input 
  value={dataForm.email}
  onChange={inputChangeHandler} type="text" name="email" />
  </label>
  <button type="submit" onClick={handleCheckout}>Finalizar compra</button>
</form>

      </div>
    ) 
   
  }
  export default CheckoutForm;