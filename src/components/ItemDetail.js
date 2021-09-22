import React from 'react'

const ItemDetail= ({item}) => {
    return (
        <div>
            <h2>{item.nombre}</h2>
            <h4>{item.descrip}</h4>
            <h2>{item.precio}</h2>

        </div>
    )
}

export default ItemDetail
