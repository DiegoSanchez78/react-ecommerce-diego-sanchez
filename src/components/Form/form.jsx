import React from "react"

export default function Form(props) {
    return(
        <form>
            <div>
                <label for= "ejemplo">
                    <small>Ingreso consonante</small>
                </label>
                <input
                type="ejemplo"
                id="ejemplo"
                aria-describedby="ejemplo"
                placeholder="ingrese texto"/>
            </div>
            <div>
                <button type="submit">
                    Enviar
                </button>
            </div>


        </form>

    )
}