import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';



function ItemCount({stock, initial, onAdd}) {

    const [cantidad, setCantidad] = useState(initial);
    const [cambiarBoton, setCambiarBoton] = useState(true);


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
        setCambiarBoton(false)
        }
    }


    return (
        <div>
            <Button variant="outline-info" size="sm" disabled>{cantidad}</Button> <br/> <br/>
            <Button variant="info" size="sm" onClick= {restar}>-</Button>
            { cambiarBoton ?

            <Button variant="info" size="sm" onClick = {agregarCarrito}>Agregar al carrito</Button>
            :
            <Button variant="info" size="sm">Terminar compra</Button>
            }
            <Button variant="info" size="sm" onClick={sumar}>+</Button>
        </div>
    )
}

export default ItemCount