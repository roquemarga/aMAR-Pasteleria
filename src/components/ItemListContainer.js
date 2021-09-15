import React from 'react'
import ItemCount from './ItemCount'
import {useState} from "react"

function ItemListContainer({greeting}) {

    const [cantidad, setCantidad] = useState(0);


    const onAdd = (cantidad) => {
        setCantidad(cantidad)
        console.log(cantidad, "En el carrito");
    }
    return (
        <div>
            <h2>{greeting}</h2>
            <ItemCount stock={12} initial={1} onAdd={onAdd} />
        </div>
    )
}

export default ItemListContainer
