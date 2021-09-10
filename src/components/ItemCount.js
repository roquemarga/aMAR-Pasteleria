import React, {Component, useState} from 'react';



function ItemCount({stock, initial, onAdd}) {

    const [cantidad, setCantidad] = useState(0);


    return (
        <div>
            <h2>{initial}</h2>
            <button>-</button>
            <button onClick = {() => onAdd(initial)}>Agregar al carrito</button>
            <button>+</button>
        </div>
    )
}

export default ItemCount 
{stock, initial, onAdd}