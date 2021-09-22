import React from 'react'
import { useEffect, useState } from 'react'
import { fetchProducto } from './Productos'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {

    const [item, setItem] = useState([])

    useEffect(() => {

        fetchProducto
        .then(resp => setItem(resp))

    }, [])

    return (
        <div>
            <ItemDetail item={item} />
        </div>
    )
}

export default ItemDetailContainer
