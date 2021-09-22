import React from 'react'
import Item from './Item'


const ItemList= ({productos}) => {
    return (
        <div>
            {productos.map(producto => <Item producto={producto}/>
            )}


        </div>

    )
}


export default ItemList
