import React from 'react';
import ItemCount from './ItemCount';

function ItemListContainer({greeting}) {

    const onAdd = (cantidad) => {
        console.log(cantidad, "En el carrito");
    }
    return (
        <div>
            <ItemCount stock = "5"
            initial = "1"
            onAdd = {onAdd}/> 
            {greeting}
        </div>
    )
}

export default ItemListContainer
