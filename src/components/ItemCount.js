import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';



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
            <Button variant="outline-info" size="md" disabled>{cantidad}</Button>{' '} <br/> <br/>
            <Button variant="info" size="md" onClick= {restar}>-</Button>{' '}
            <Button variant="info" size="md" onClick = {agregarCarrito}>Agregar al carrito</Button>{' '}
            <Button variant="info" size="md" onClick={sumar}>+</Button>{' '}
        </div>
    )
}

export default ItemCount