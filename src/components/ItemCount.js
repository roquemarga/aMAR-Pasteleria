import React, {useState} from 'react';



function ItemCount({stock, initial, onAdd}) {

    const [cantidad, setCantidad] = useState(initial);

    function sumar () {
        if(cantidad<12){
        setCantidad(cantidad + 1)
        }
    } 

    function restar () {
        if(cantidad>1){
        setCantidad(cantidad - 1)
        }
    }

    const agregarCarrito = () => {
        if(cantidad<=12){
        onAdd(cantidad)
        }
    }


    return (
        <div>
            <label>{cantidad}</label>
            <button onClick= {restar}>-</button>
            <button onClick = {agregarCarrito}>Agregar al carrito</button>
            <button onClick={sumar}>+</button>
        </div>
    )
}

export default ItemCount